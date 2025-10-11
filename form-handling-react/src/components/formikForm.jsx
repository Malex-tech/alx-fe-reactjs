import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Formik submitted:", values);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      console.log("Registered User:", data);
      alert("User registered successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label className="block font-medium mb-1">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-3"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
