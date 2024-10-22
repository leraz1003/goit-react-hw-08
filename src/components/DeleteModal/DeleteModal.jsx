const DeleteModal = ({ onClose, handleDelete }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative mt-20">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex items-center py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6 text-red-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M12 20.5A8.5 8.5 0 103.5 12a8.5 8.5 0 008.5 8.5z"
            />
          </svg>
          <p className="text-lg">
            Are you sure you want to delete the contact?
          </p>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="btn  bg-blue-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors"
            onClick={handleDelete}
          >
            Accept
          </button>
          <button
            type="button"
            className="btn btn-outline text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
