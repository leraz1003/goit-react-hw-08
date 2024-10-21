import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaTrash } from "react-icons/fa";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const initials = contact.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card card-bordered border-gray-300 bg-white shadow-lg w-full mb-4 max-w-sm ml-8 p-4">
      <div className="flex items-center justify-start">
        <div className="flex items-center">
          <div className="avatar placeholder mr-4">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12">
              <span className="text-lg">{initials}</span>
            </div>
          </div>

          <div>
            <p className="font-bold text-md text-gray-800">{contact.name}</p>
            <p className="text-gray-600">{contact.number}</p>
          </div>
        </div>

        <button
          className="btn btn-circle btn-sm focus:outline-none text-gray-400 ml-auto flex items-center justify-center bg-transparent hover:bg-gray-100 hover:text-red-600 transition-colors"
          onClick={handleDelete}
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
