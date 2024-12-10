import { useState } from 'react'
import './App.css'
import {auth, provider} from "./firebase";
import { signInWithPopup } from 'firebase/auth';

function App() {
  const [user, setUser] = useState();

  const handlelogin = () => {
    signInWithPopup(auth,provider)
    .then((data)=> setUser(data.user));
  }

  return (
    <>
      <h1>FIREBAS-AUTH</h1>
      <h3>Giriş Yapan Kullanıcı</h3>
      <h2>{user?.email}</h2>
          
          <button onClick={handlelogin}>Google İle Giriş Yap</button>
    </>
  );
}

export default App
