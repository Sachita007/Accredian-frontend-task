import { useState } from 'react'
import Modal from './Model';

function ReferBtn() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div >

            <button onClick={toggleModal} className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600'>Refer Now</button>
            {isModalOpen && <Modal toggleModal={toggleModal} />}
        </div>
    );
}

export default ReferBtn