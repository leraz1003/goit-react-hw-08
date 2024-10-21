import { ErrorMessage, Field, Form, Formik } from "formik";

import { nanoid } from "nanoid";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")

      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, ""); // Видаляємо все, крім цифр
    if (phoneNumber.length < 4) return phoneNumber;
    if (phoneNumber.length < 7)
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ isValid, dirty, setFieldValue }) => (
        <Form className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-md ml-8 mt-12 mb-15">
          <div className="form-control">
            <label className="label" htmlFor={nameFieldId}>
              <span className="label-text font-semibold">Name</span>
            </label>
            <Field
              id={nameFieldId}
              className="input input-bordered w-full"
              type="text"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor={phoneFieldId}>
              <span className="label-text font-semibold">Number</span>
            </label>
            <Field
              id={phoneFieldId}
              className="input input-bordered w-full"
              type="text"
              name="number"
              onChange={(e) =>
                setFieldValue("number", formatPhoneNumber(e.target.value))
              }
            />
            <ErrorMessage
              name="number"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            className={`btn btn-primary w-full ${
              (!isValid || !dirty) && "btn-disabled"
            }`}
            type="submit"
            disabled={!isValid || !dirty}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
