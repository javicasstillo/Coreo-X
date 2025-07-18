// src/firebase.js
import { initializeApp } from '.firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA3d7W6sBpxD8Vo3_4YQ5L0flI29xt2Rwk",
  authDomain: "backend-coreox.firebaseapp.com",
  projectId: "backend-coreox",
  storageBucket: "backend-coreox.firebasestorage.app",
  messagingSenderId: "1013608152466",
  appId: "1:1013608152466:web:1b1d633e20a3464160554b",
  databaseURL: "https://backend-coreox-default-rtdb.firebaseio.com"

};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db, ref, get, set }
