import React from 'react'
import Profile from '../Auth/Profile'
import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout';

export default function Home() {
    const {currentUser} = useAuth();
    
    return (
        <section className="home">
            <h1>Put homepage here</h1>
            {currentUser && <Logout/>} 
        </section>

    )
}
