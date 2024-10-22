import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValue = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>

        <div className="text-center mt-4">
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 font-semibold underline"
          >
            Registration
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
