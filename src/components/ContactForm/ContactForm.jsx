import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import clsx from "clsx";
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
      .matches(/^[a-zA-Z]+$/, "The input should contain only letters")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            id={nameFieldId}
            className={clsx(s.input, s.name)}
            type="text"
            name="name"
          />
          <ErrorMessage name="name" component="span" className={s.error} />
          <label className={s.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            id={phoneFieldId}
            className={s.input}
            type="text"
            name="number"
          />
          <ErrorMessage name="number" component="span" className={s.error} />
          <button
            className={clsx(s.button, { [s.disabled]: !isValid || !dirty })}
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
