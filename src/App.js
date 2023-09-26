import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [cards, setCards] = useState("");
  
  useEffect(() => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";    
  
  const fetchData = async () => { 
    try { 
      const response = await fetch(url)
      const json = await response.json();
      setCards(json.sprites.other["official-artwork"].front_default);
    } catch (error) { 
      console.log("error", error);
    }
  }; 

  fetchData();
}, []); 


  return (
    <div>
      <img src={cards} alt="ditto" className="images"></img>
    </div>
  );
};



export default App;
