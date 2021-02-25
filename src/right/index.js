import Title from './Title';
import Cards from './Cards';
import Graphs from './Cards';
import './index.css';

function Right() {
  return (
    <div className="right">
      <Title title="Dashboard" />
      <Cards />
      <Graphs />
    </div>
  );
}

export default Right;
