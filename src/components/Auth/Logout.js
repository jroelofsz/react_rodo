import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router'
import './Auth.css'
import Profile from './Profile'

export default function Logout() {
    const {logout, currentUser} = useAuth();
    const history = useHistory();
    
    function handleAuth(){
        logout();
        history.push('/login');
    }

    return (
        <div className="logout p-3 bg-info text-white">
            <Profile/>
            
        </div>
    )
}
