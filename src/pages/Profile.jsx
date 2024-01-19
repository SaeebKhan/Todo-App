import React, { useContext } from 'react';
import ProfileForm from '../components/ProfileForm';


function Profile(props) {
   
    return (
        <div>
        <h1>Profile</h1>
        <div className='card-2'>
            <div className='edit-profile'>
        <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#task-modal" > Edit Profile </button>
        <ProfileForm/>
        </div>
        </div>
    </div>

    );
}

export default Profile;
