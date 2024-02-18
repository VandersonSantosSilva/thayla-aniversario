import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBFDdbNnxRL4P7gSINGzNNGzbO_zuVUeNA",
    authDomain: "thayla-e1416.firebaseapp.com",
    projectId: "thayla-e1416",
    storageBucket: "thayla-e1416.appspot.com",
    messagingSenderId: "789503106161",
    appId: "1:789503106161:web:3c5f3e34bbfc5a1af5cfd0"
};

export const db = getFirestore(initializeApp(firebaseConfig))
