import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ReferForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true); // State to manage form visibility

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://accredian-backend-task-g0i0.onrender.com/api/referrals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Clear form data after successful submission
            setSuccessMessage('Referral submitted successfully!');
            setErrorMessage('');
            setFormVisible(false); // Hide the form after successful submission

        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred while submitting the referral.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            {formVisible && ( // Conditionally render the form based on formVisible state
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-stone-800">
                    <div>
                        <label className="block mb-1">Referrer Name</label>
                        <input
                            type="text"
                            {...register('referrerName', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.referrerName && <p className="text-red-500 text-sm">Referrer name is required</p>}
                    </div>

                    <div>
                        <label className="block mb-1">Referrer Email</label>
                        <input
                            type="email"
                            {...register('referrerEmail', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.referrerEmail && <p className="text-red-500 text-sm">Referrer email is required</p>}
                    </div>

                    <div>
                        <label className="block mb-1">Referee Name</label>
                        <input
                            type="text"
                            {...register('refereeName', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.refereeName && <p className="text-red-500 text-sm">Referee name is required</p>}
                    </div>

                    <div>
                        <label className="block mb-1">Referee Email</label>
                        <input
                            type="email"
                            {...register('refereeEmail', { required: true })}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {errors.refereeEmail && <p className="text-red-500 text-sm">Referee email is required</p>}
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Submit
                    </button>
                </form>
            )}

            {successMessage && !errorMessage && !formVisible && (
                <div className="text-green-600 mt-2">{successMessage}</div>
            )}

            {errorMessage && (
                <div className="text-red-600 mt-2">{errorMessage}</div>
            )}
        </div>
    );
};

export default ReferForm;
