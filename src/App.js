import "./App.css";
import { useState } from "react";
import data from "./assets/pokemon-data.json";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [teamArr, setTeamArr] = useState([]);
  const [pokemonData, setPokemonData] = useState(data);
  const [baseCount, setBaseCount] = useState(0)

  function sortByName() {
      let temp = [...pokemonData]
      temp.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      setPokemonData(temp)
      console.log(temp)
  }

  function sortByPokedex(){
      let temp = [...pokemonData]
      temp.sort((a,b) => a.pokedex - b.pokedex);
      setPokemonData(temp)
      console.log(temp)
  }

  function sortByBase(){
      let temp = [...pokemonData]
      temp.sort((a,b) => a.base - b.base);
      setPokemonData(temp)
      console.log(temp)
  }

  return (
      <div className="App">
          <div className="content">
              <div className="flex-row" id="header">
                  <h1>Build Your Favorite Pokemon Team</h1>
                  <div className="dropdown">
                      <button className="dropbtn">Sort</button>
                      <div className="dropdown-content">
                          <button onClick={() => sortByName()}>Name</button>
                          <button onClick={() => sortByPokedex()}>Pokedex</button>
                          <button onClick={() => sortByBase()}>Base Total</button>
                      </div>
                  </div>
              </div>
              <div className="flex-row">
                      {pokemonData.map((item) => ( <PokemonCard info={item} team={teamArr} setTeam={setTeamArr} base={baseCount} setBase={setBaseCount}/>))}
              </div>
          </div>
          <div className="cart">
              <div className="flex-column">
                  <div className="flex-row">
                      <h1>Your new team!</h1>
                  </div>
                  <div className="flex-team-row">
                      {teamArr.map((item) => ( <PokemonList info={item} team={teamArr} setTeam={setTeamArr} base={baseCount} setBase={setBaseCount}/>))}
                  </div>
                  <div className="flex-row-total">
                      <h1>Base Count {baseCount}!</h1>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;