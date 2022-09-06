import { useFormik } from "formik";
import * as Yup from "yup";
import { Product, ProductCreate } from "../data";

type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  title: Yup.string().min(5).required(),
  price: Yup.number().strict().required(),
});

interface Props {
  product?: Product;
}

function ProductForm(props: Props) {
  const formik = useFormik<ProductCreate>({
    initialValues: props.product || {
      title: "",
      price: 0,
    },
    validateOnChange: true,
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      if (props.product) {
        // EDIT
      } else {
        // NEW
      }
      // TODO: Save product to state/api
      console.log("ON SUBMIT", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <input
        placeholder='title'
        type='text'
        name='title'
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.touched.title && formik.errors.title}

      <input
        placeholder='price'
        type='text'
        name='price'
        value={formik.values.price}
        onChange={(e) => formik.setFieldValue("price", Number(e.target.value))}
      />
      {formik.touched.price && formik.errors.price}

      <button>Save Product</button>
    </form>
  );
}

export default ProductForm;
