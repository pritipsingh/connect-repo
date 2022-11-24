import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [connected, setConnected] = useState();
  const connectWallet = async () => {
   const { ethereum } = window;
    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Connected", accounts[0]);
    setConnected(accounts[0]);
  }
  return (
    <div className="body">
      <button onClick={connectWallet}>{
       connected ? connected : "Connect Wallet"
      }</button>
    </div>
  );
}

export default App;
