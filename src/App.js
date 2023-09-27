import './App.css';
import Card from './Card';

const App = () => {
  var array = [];

  for (var i = 1; i <= 151; i++) {
    array.push(i);
  }

  return (
    <div>
      {array.map((id) => {
        return <Card id={id}>{id}</Card>;
      })}      
    </div>
  );
};

export default App;
