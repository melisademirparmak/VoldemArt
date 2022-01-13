import { useState } from 'react';
import Web3 from 'web3';
import Card from '../../ui/Card';

function Profile() {
  const account = localStorage.getItem('account');
  const [profileName, setProfileName] = useState('');
  const [walletAddress, setWalletAddress] = useState(account);

  const signMessage = async () => {
    const provider = window.ethereum;
    const web3 = new Web3(provider);
    web3.eth.personal.sign(profileName, walletAddress).then(console.log);
  };

  return (
    <Card>
      <h1>Profile</h1>
      <input
        type="text"
        onChange={(e) => {
          setProfileName(e.target.value);
        }}
        placeholder="Please enter your profile name"
      />
      <input
        type="text"
        onChange={(e) => {
          setWalletAddress(e.target.value);
        }}
        defaultValue={account}
        placeholder="Please enter your profile name"
      />
      <button
        onClick={() => {
          signMessage();
        }}
      >
        Save
      </button>
    </Card>
  );
}

export default Profile;
