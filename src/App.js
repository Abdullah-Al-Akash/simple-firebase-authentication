import logo from './logo.svg';
import './App.css';
import firebaseApp from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function App() {
  const auth = getAuth(firebaseApp);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // Sign In Using Popup:
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in Using Google</button>
    </div>
  );
}

export default App;
