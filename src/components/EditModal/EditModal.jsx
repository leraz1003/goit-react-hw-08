const EditModal = ({ contact }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative mt-20">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          // onClick={closeModal}
        >
          ✕
        </button>

        <div className="py-4">
          <p className="text-lg font-bold">Edit Contact</p>

          <input
            type="text"
            className="input input-bordered w-full mt-4"
            defaultValue={contact.name}
            placeholder="Edit name"
          />
          <input
            type="text"
            className="input input-bordered w-full mt-4"
            defaultValue={contact.number}
            placeholder="Edit number"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            // onClick={() => dispatch(closeEditModal())} // Закриваємо модалку після збереження
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition-colors"
            // onClick={() => dispatch(closeEditModal())} // Закриваємо модалку без збереження
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
