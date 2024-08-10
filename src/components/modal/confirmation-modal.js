"use client";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-4/12">
        <h2 className="text-lg font-medium mb-4">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-1.5 bg-danger text-sm text-white rounded hover:bg-danger-hover"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-200 text-sm text-black rounded hover:bg-gray-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
