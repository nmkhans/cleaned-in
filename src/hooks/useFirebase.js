import { useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../firebase.init';


const useFirebase = () => {

    //? User Observer
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);

    //? google provider
    const googleProvider =  new GoogleAuthProvider();

    //? google sign in
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result);
        })
    }

    return {
        user,
        googleSignIn
    }
}

export default useFirebase;