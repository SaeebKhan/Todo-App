import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';


function ProfileForm(props) {
  const {user}=useContext(AuthContext)
    


  

     const handleChange = (e) => {
        const { name, value } = e.target;
       
    }

    
    const submitProfile = (e) => {
        e.preventDefault();
       
    }



    return (
        <div className="modal" tabIndex="-1" id="task-modal">
            <div className="modal-dialog">
                <div className="modal-content bg-primary">
                    <div className="modal-header" data-bs-theme="dark">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label text-white ">Name</label>
                                <input type="text" className="form-control" value={user?.name} name="name" onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white">Age</label>
                                <input type="text" className="form-control"  name="age" onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white">Date of Birth</label>
                                <input type="date" className="form-control"  name="date" onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white">Email</label>
                                <input type="email" className="form-control"  value={user?.email} name='email' onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white">Phone Number</label>
                                <input type="number" className="form-control"  name='phone' onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white">Occupation</label>
                                <input type="text" className="form-control"  name='occupation' onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white px-2">Male</label>
                                <input className="form-check-input text-white px-2" type="radio"  name="gender" />
                                <label className="form-label text-white px-2">Female</label>
                                <input className="form-check-input text-white px-2" type="radio"  name="gender" />
                                <label className="form-label text-white px-2">Others</label>
                                <input className="form-check-input text-white px-2" type="radio"  name="gender"  />
                            </div>

                            <div className="mb-3">
                                <button type="button" className="btn btn-primary me-2 text-white" onClick={submitProfile} > Update Profile </button>
                                <button type="button" className="btn btn-warning text-white" data-bs-dismiss="modal" > Cancel </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;
