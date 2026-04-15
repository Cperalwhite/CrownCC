// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, onValue, push, set, remove } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpVtaIhpyontLBoPeyA2P7IPwaQpaDJ7o",
    authDomain: "crowncc-e51e6.firebaseapp.com",
    databaseURL: "https://crowncc-e51e6-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "crowncc-e51e6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, ref, onValue, push, set, remove, signInWithPopup, onAuthStateChanged, signOut };