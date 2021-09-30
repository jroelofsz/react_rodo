import React, {useContext, useState, useEffect} from 'react';

import firebaseApp, {authResult} from '../base';

import firebase from 'firebase';



//Create a context to pass data through the entire application
const AuthContext = React.createContext();

//function useAuth() allows us to access the context created above
export function useAuth(){
    return useContext(AuthContext);
}


//Below is the AuthProvider component which will nest all other componets in the application. {children} referes to this nests
export function AuthProvider({children}){
    //Hook that captures the current user
    const [currentUser, setCurrentUser] = useState();

    //Hook that will loop to see if Auth is still loading, if it's still loading it tells compons to wait to mount to the Virtual DOM
    const [loading, setLoading] = useState(true);

    //LOGIN FUNCTIONALITY
    async function authenticate(){
        //Instantiates a new Auth Provder object that will connect to GitHub OAuth app.
        const authProvider = new firebase.auth.GithubAuthProvider();
        return(
            firebaseApp.auth().signInWithPopup(authProvider).then(authHandler)
        );
    }


    //This function will handle user informatino and set currentUser
    async function authHandler(authData){
        setCurrentUser(authData.user);
    }

    //Logout functionality
    async function logout(){
        return firebaseApp.auth().signOut().then(setCurrentUser(null));
    }

    //useEffect hook that tells the app to re-render if the currentUser changes
    useEffect(() => {
        const authChange = authResult.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return authChange;
    }, []);



    //Object called value which will be passed through the AuthProvider component as props
    const value = {
        currentUser, authenticate, logout
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}



