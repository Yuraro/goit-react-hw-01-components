import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import data from '../configs/data.json';
import friends from '../configs/friends.json';
import { FriendList } from "./FriendList/FriendList";
import transactions from '../configs/transactions.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrap}>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

