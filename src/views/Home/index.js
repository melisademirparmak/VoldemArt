import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/home.css';
import Web3 from 'web3';

const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

const Home = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrMsg] = useState();

  const getEth = async () => {
    if (ethereum) {
      web3.eth.requestAccounts().then((res) => {
        getAccount(res[0]);
      });
    } else {
      setErrMsg('Ethereum uygulaması bulunamadı.');
    }
  };

  const getAccount = async (data) => {
    localStorage.setItem('account', data);
    getBalance(data);
  };

  const getBalance = async (data) => {
    const balance = parseInt(
      web3.utils.fromWei(await web3.eth.getBalance(data), 'ether')
    );
    localStorage.setItem('balance', balance);

    if (balance === 0) {
      navigate('/walletAdress');
    }
    if (balance > 0) {
      navigate('/profile');
    }
  };
  return (
    <div className="home">
      <button onClick={() => getEth()}>Get Wallet </button>
      {/* <p>{setErrMsg}</p> */}
    </div>
  );
};

export default Home;
