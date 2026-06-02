/*
 * Firebase Configuration
 *
 * To enable cloud sync so all users see the same data:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a project (e.g. "joka-mwaga")
 * 3. Click "Realtime Database" → "Create Database" → "Start in test mode"
 * 4. Click the Web icon (</>) to register a web app → copy the config
 * 5. Paste the values below between the quotes
 *
 * To disable Firebase sync (revert to localStorage-only):
 *   Simply delete or rename this file.
 *   All your latest data is already saved in localStorage automatically.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCMjYENtcnyeWWksOP8IOtY8nfJd5u2xXY",
  authDomain: "joka-mwaga.firebaseapp.com",
  databaseURL: "https://joka-mwaga-default-rtdb.firebaseio.com",
  projectId: "joka-mwaga",
  storageBucket: "joka-mwaga.firebasestorage.app",
  messagingSenderId: "467175417310",
  appId: "1:467175417310:web:cccb485b6a1a909be4294f"
};

let fbDb = null;

if (firebaseConfig.apiKey && firebaseConfig.databaseURL) {
  firebase.initializeApp(firebaseConfig);
  fbDb = firebase.database();
  console.log('Firebase initialized for cloud sync');
} else {
  console.log('Firebase not configured — using localStorage only');
}
