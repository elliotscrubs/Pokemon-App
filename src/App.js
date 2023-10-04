import React, {useState} from "react";
import './Card.css';
import Card from './Card';
import TextField from '@mui/material/TextField';

const App = () => {
  const [idList, setIdList] = useState(() => {
    var array  = [];
    
    for (var i = 1; i <= 12; i++) {
      array.push(i);      
    }
    return array;
  });
  

  const loadMore = () => { 
    var array = [...idList]

    for (var i = idList.length + 1; i <= idList.length + 12; i++) {
      array.push(i);      
    };
    setIdList(array)
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
        {idList.map(id => {
          return <Card id={id}>{id}</Card>;
        })}
      </div>
      <button onClick={loadMore} className="loadButton"> Load More </button>
    </>
  );
};

export default App;

