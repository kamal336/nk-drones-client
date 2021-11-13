import { useEffect, useState } from "react";
import initialAthentication from "../Pages/Authentication/Firebase/initializeFirebse";
import { getAuth, signInWithPopup, GoogleAuthProvider,updateProfile, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";

initialAthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
//   set state here 
   const [user,setUser] = useState({});
   const [error,setError] = useState("");
   const [isLoading,setIsLoading] = useState(true);
   const [admin,setAdmin] = useState(false);

//    register with email and password 
const registerUser = (email,password,name,history) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUserDb(email, name, 'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
    })
    .catch((error) => {
        setError(error.message);
    })
        .finally(()=> setIsLoading(false))
}

// login user 
const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
          
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
}

// observer user state
useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unsubscribed;
}, [])

// set admin 
useEffect(() => {
    fetch(`https://desolate-stream-72668.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])

// logout user 
const logOut = (history) =>{
    signOut(auth)
    .then(()=>{
        console.log('successfully logout');
        setUser({});
        history.replace('/')
    }).catch(error=>{
        setError(error.message)
    })
}

// google Login 
   const googleLogin = (location,history) =>{
       setIsLoading(true)
       signInWithPopup(auth,googleProvider)
       .then(result=>{
           const user = result.user;
           saveUserDb(user.email, user.displayName, 'PUT');
           const destination = location?.state?.from || '/';
           history.replace(destination);
           setError('');
       }).catch(error=>{
           setError(error.message);
       })
       .finally(()=>{
           setIsLoading(false);
       })
}

// seve user to database 
const saveUserDb = (email,displayName,method) =>{

    const user = { email, displayName };
        fetch('https://desolate-stream-72668.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
}


return {
    user,
    isLoading,
    error,
    googleLogin,
    registerUser,
    loginUser,
    logOut,
    admin
}

}

export default useFirebase;