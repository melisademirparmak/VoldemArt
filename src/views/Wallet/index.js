import Card from '../../ui/Card';
import '../Wallet/wallet.css';

function Wallet() {
  const account = localStorage.getItem('account');
  const balance = localStorage.getItem('balance');
  return (
    <>
      <h1 className="text-center">Wallet</h1>
      <Card>
        <h4>
          Account: <span>{account}</span>
        </h4>
        <h4>
          Balance:<span> {balance} ETH </span>
        </h4>
      </Card>
    </>
  );
}

export default Wallet;
