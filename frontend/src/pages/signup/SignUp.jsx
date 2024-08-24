import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import GenderCheckBox from '../signup/GenderCheckBox';
import useSignup from '../../Hooks/useSignup';

const SignUp = () => {

    const [inputs,setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const {loading, signup} = useSignup();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page par défaut lors de la soumission du formulaire
        await signup(inputs);
    }

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }


    return (
        <div className='flex flex-col items-center justify-center min-w-custom mx-auto'>
            <div className='w-full p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
                <h1 className='text-3x1 font-semibold text-center text-gray-300 ' style={{ fontSize: '1.5rem' }}>
                    Sign Up <span className='text-blue-800'>ChatApp</span>
                </h1>
    
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="Salwa Hnid" className='w-full input input-bordered h-10 bg-gray-200' 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="salwahn" className="w-full input input-bordered h-10 bg-gray-200"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username:e.target.value})}
                         />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10 bg-gray-200"
                            value={inputs.password} 
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                            />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10 bg-gray-200"
                            value={inputs.confirmPassword} 
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                           />
                    </div>

                    <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 bg-gray-300' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
  
}

export default SignUp;
/* Starter code  
import React from 'react'

export const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                Sign Up <span className='text-blue-500'>ChatApp</span>
                </h1>
    
                <from>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="Salwa Hnid" className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="salwahn" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input type="text" placeholder="Confirm password" className="w-full input input-bordered h-10" />
                    </div>
                    <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </from>
            </div>
        </div>
    );
  
}
*/
