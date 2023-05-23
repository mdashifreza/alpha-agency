import React, { useState } from 'react';
import img1 from '../assets/image1.jpg';
function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
            setErrorMessage('Please fill in all fields.');
        } else {
            setErrorMessage('');
            onSubmit();
        }
    };
    return (
        <div>
            <div className='top-0 left-0'>
                <img src={img1} alt="" 
                    
                />
            </div>
            <div className='absolute right-0 top-0 z-10 border-2 rounded-md p-2 w-full md:w-1/2 mt-36 bg-white mr-10 sm:ml-10'>
                <div className='font-bold mb-10'>Connect with us
                    <p className='text-xs text-gray-500'>for outstanding protective overlaminates</p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-md py-2 px-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="lastName">Contact Number</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Contact Numbers"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="lastName">Company</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Company"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="state">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                State
                            </label>
                            <div>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                            </div>
                            </div>
                            {errorMessage && <p className="error col-span-2">{errorMessage}</p>}
                            <div className='flex justify-center'>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>



    )
}
export default Form;
