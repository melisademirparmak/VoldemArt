import Card from '../../ui/Card';
import '../Wallet/wallet.css';

function Wallet() {
  const account = localStorage.getItem('account');
  const balance = localStorage.getItem('balance');
  return (
    <Card>
      <h1 className="text-center">Wallet</h1>
      <h5>Account: {account}</h5>
      <h5>Balance: {balance} ETH</h5>
    </Card>
  );
}

export default Wallet;
