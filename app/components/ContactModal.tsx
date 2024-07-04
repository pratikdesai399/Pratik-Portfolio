import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
        <p>Email: pratikdesai399@tamu.edu</p>
        <p>Phone: +1 9793500973</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/pratikdesai399/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            linkedin.com/in/pratikdesai399/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/pratikdesai399"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            github.com/pratikdesai399
          </a>
        </p>
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-gray-800 text-white rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ContactModal;
