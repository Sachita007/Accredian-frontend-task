
import ReferForm from './ReferForm';

// eslint-disable-next-line react/prop-types
const Modal = ({ toggleModal }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
                <ReferForm />
                <button
                    onClick={toggleModal}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
