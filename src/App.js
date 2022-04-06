import logo from './logo.svg';
import './App.css';
import firebaseApp from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

function App() {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // Sign In Using Popup:
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Sign Out Functionality:
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setUser({})
    });

  }
  return (
    <div className="App">
      {
        user.email ?
          <button onClick={handleSignOut}>Sign Out</button>
          :
          <button onClick={handleGoogleSignIn}>Sign in Using Google</button>
      }
      <h3>Name: {user.displayName}</h3>
      <p>I know Your email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
