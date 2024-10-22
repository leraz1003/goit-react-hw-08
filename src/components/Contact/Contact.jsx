import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import EditModal from "../EditModal/EditModal";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const initials = contact.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <div className="card card-bordered border-gray-300 bg-white shadow-lg w-full mb-4 max-w-sm ml-8 p-4">
        <div className="flex items-center justify-between">
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

          <div className="flex space-x-2 ml-auto">
            {/* Кнопка редагування */}
            <button
              className="btn btn-circle btn-sm focus:outline-none text-gray-400 flex items-center justify-center bg-transparent hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={openEditModal}
            >
              <FaEdit size={20} />
            </button>

            {/* Кнопка видалення */}
            <button
              className="btn btn-circle btn-sm focus:outline-none text-gray-400 flex items-center justify-center bg-transparent hover:bg-gray-100 hover:text-red-600 transition-colors"
              onClick={openDeleteModal}
            >
              <FaTrash size={20} />
            </button>
          </div>
        </div>
      </div>

      {isDeleteModalOpen && (
        <DeleteModal onClose={closeModal} handleDelete={handleDelete} />
      )}
      {isEditModalOpen && <EditModal contact={contact} onClose={closeModal} />}
    </>
  );
};

export default Contact;
