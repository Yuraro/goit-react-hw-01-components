import { Profile } from "../components/Profile.jsx";
import { Statistics } from "../components/Statistics.jsx";
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

