import { useDispatch } from "react-redux";
import { Field, Formik, Form } from "formik";
import { register } from "../../redux/auth/operation";
import * as Yup from "yup";
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .required("Password is required"),
  });

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={RegistrationSchema}
          >
            <Form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <Field
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
