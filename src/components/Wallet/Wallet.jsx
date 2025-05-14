import { useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
const Wallet = ()=>{
 
 const {handleWallet,web3State} = useWeb3Context()
 const {selectedAccount} = web3State
 const navigateTo = useNavigate()

 useEffect(()=>{
    if(selectedAccount){
        navigateTo('/register-candidate')
    }
 },[selectedAccount])

 return <button onClick={handleWallet}>Connect Wallet</button>
}
export default Wallet;