import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth, db} from '../firebase';
import {signOut} from 'firebase/auth';
import {updateDoc, doc} from 'firebase/firestore';
import {AuthContext} from '../context/auth';

const Navbar = () => {
    const history = useHistory();
    //checks is user is logged in
    const {user} = useContext(AuthContext);
    const handleSignOut = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {isOnline: false});
        await signOut(auth);
        history.replace('/login');
    };
    return (
    <nav>
        <h3>
            <Link to="/">Messenger</Link>
        </h3>
        {/*
        if logged in show Profile and Logout, otherwise show
        register and login
        */}
        <div>
            {user ? (
            <>
            <Link to="/profile">Profile</Link>
            <Link onClick={handleSignOut}>
                Logout</Link>
            </> 
            ) : ( 
            <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            </>
            )}
        </div>
    </nav>
    )
    };


export default Navbar