import initializeFirebaseApp from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup,signOut , GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebaseApp();

const useFirebase= () =>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user,setUser]= useState([]);
    const [error,setError]=useState([]);
    
    const loginWithGoogle= () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            // console.log(result.user);
            // console.log(result.user.email);
            // console.log(result.user.displayName);
            setUser(result.user);
        })
        .catch((error)=>{
            setError(error.message);
        })  

    }


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            } else {
              setError(error)
            }
          });
    },[])


    const handleLogout= () =>{

        signOut(auth).then(() => {
          setUser({});
        }).catch((error) => {
          setError('')
        });

    }




    return {loginWithGoogle,user,error,handleLogout,createUserWithEmailAndPassword};
    
}

export default useFirebase;