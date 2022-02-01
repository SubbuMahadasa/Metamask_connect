import React , {useState} from 'react';
import {ethers} from 'ethers'

export default function Wallet() {
  const [account , setaccount] = useState('');
  const [Balance , setBalance] = useState('');
  const [ConnectWallet , setConnectWallet] = useState('Connect wallet')
  const WalletHandle = () => {
    if (window.ethereum) {
      window.ethereum.request({method : 'eth_requestAccounts'})
      .then(result => {
        accountChangeHandler(result[0]);
      })
    } 
  }
  const accountChangeHandler = (newAccount) => {
    setaccount(newAccount)
    getBalanace(newAccount)
  }
  const getBalanace = (add) => {
    window.ethereum.request({method : 'eth_getBalance' , params : [add , 'latest']})
    .then(bal => {
      setBalance(ethers.utils.formatEther(bal))
    })
  }
  return (
    <>
      <div>
        <h3>Integrating Metamask with React App</h3><br/>
        <p>Please click the button to get your account details</p>
        <button className='connect_btn' onClick={WalletHandle}>{ConnectWallet}</button>
        <h2>Account Number : {account}</h2>
        <h2>My Balance : {Balance}</h2>
      </div>
    </>
  );
}
