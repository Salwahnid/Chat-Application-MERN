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
