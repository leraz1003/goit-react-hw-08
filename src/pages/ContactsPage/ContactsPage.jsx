import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
