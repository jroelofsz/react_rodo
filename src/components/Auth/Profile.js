import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Profile() {
    const {currentUser} = useAuth();
    
    return (
        <span className="profile">
            {currentUser.email}
            <img src={currentUser.photoURL} alt={currentUser.displayName}/>
        </span>
    )
}
