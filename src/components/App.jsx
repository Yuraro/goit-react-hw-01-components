import { Profile } from "../components/Profile.jsx";
import { Statistics } from "../components/Statistics.jsx";
import data from '../data.json';
import friends from '../friends.json';
import { FriendList } from "../components/FriendList";
import transactions from '../transactions.json';
import TransactionHistory from "../components/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

