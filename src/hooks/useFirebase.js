import { useEffect, useState } from "react";
import initialAthentication from "../Pages/Authentication/Firebase/initializeFirebse";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";

initialAthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
//   set state here 
   const [user,setUser] = useState({});
   const [error,setError] = useState("");
   const [isLoading,setIsLoading] = useState(true);

//    register with email and password 
const registerUser = (email,password,name,history) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // // save user to the database
        // saveUser(email, name, 'POST');
        // // send name to firebase after creation
        // updateProfile(auth.currentUser, {
        //     displayName: name
        // }).then(() => {
        // }).catch((error) => {
        // });
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

// logout user 

const logOut = () =>{
    signOut(auth)
    .then(()=>{
        console.log('successfully logout');
        setUser({});
    }).catch(error=>{
        setError(error.message)
    })
}

// google Login 
   const googleLogin = () =>{
       setIsLoading(true)
       signInWithPopup(auth,googleProvider)
       .then(result=>{
           const user = result.user;
            console.log(user);
       }).catch(error=>{
           setError(error.message);
       })
       .finally(()=>{
           setIsLoading(false);
       })
}

return {
    user,
    isLoading,
    error,
    googleLogin,
    registerUser,
    loginUser,
    logOut
}

}

export default useFirebase;