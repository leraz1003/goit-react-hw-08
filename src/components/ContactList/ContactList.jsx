import { useSelector } from "react-redux";

import s from "./ContactList.module.css";

import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactsList = () => {
  const filteredData = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
