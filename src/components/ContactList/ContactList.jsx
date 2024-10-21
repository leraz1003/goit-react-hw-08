import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactsList = () => {
  const filteredData = useSelector(selectFilteredContacts);
  return (
    <ul className="flex flex-wrap gap-4 mt-6">
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
