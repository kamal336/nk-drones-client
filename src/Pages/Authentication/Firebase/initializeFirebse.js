import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

const initialAthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initialAthentication;