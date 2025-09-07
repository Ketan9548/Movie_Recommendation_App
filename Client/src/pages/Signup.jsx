import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    // State variables to hold the values of the form fields
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/usersAuth/register', {
                FullName: fullName,
                Email: email,
                Password: password
            });
            console.log('Signup successful:', response.data);
            toast.success(response.data.message || 'Signup successful!');
            // Redirect to login page or home page after successful signup
            navigate('/login');
        } catch (error) {
            console.error('Error during signup:', error.message);
            toast.error(error?.response?.data?.message || 'Signup failed. Please try again later.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Create Your Account 🚀
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Full Name Input */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="fullName"
                        >
                            Full Name
                        </label>
                        <input
                            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="password"
                            type="password"
                            placeholder="••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full focus:outline-none focus:shadow-outline transition duration-300"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-gray-600 text-sm mt-6">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="font-bold cursor-pointer text-blue-600 hover:text-blue-800"
                        >
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;