import './Card.css';
import Card from './Card';
import TextField from '@mui/material/TextField';

const App = () => {
  var array = [];

  for (var i = 1; i <= 151; i++) {
    array.push(i);
  }

  return (
    <>
      <div className="search">
        <h1>Pokemon Search</h1>
        <div className='search'>
          <TextField
            id='outlined-basic'
            variant='outlined'
            width= '50%'
            label='Pokemon name'
          />
        </div>
      </div>
      <div className='container'>
        {array.map(id => {
          return <Card id={id}>{id}</Card>;
        })}
      </div>
    </>
  );
};

export default App;

