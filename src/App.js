import "./App.css";
import { useState } from "react";
import data from "./assets/pokemon-data.json";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";

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
  const [baseCount, setBaseCount] = useState(0);
  const [minBase, setMinBase] = useState(300);
  const [minWeight, setMinWeight] = useState(0);
  const [minHeight, setMinHeight] = useState(0);

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

  function filterByBase(value){
      setMinBase(value)
      setPokemonData(data.filter((pokemon) => (pokemon.base >= value)));
      console.log(value)
  }

  function filterByWeight(value){
      setMinWeight(value)
      setPokemonData(data.filter((pokemon) => (pokemon.weight >= value)));
      console.log(value)
  }
  function filterByHeight(value){
      setMinHeight(value)
      setPokemonData(data.filter((pokemon) => (pokemon.height >= value)));
      console.log(value)
  }

  return (
      <div className="App">
          <div className="content">
              <div className="flex-row" id="header">
                  <h1>Build Your Favorite Pokemon Team</h1>
                  <div className="dropdown">
                      <button className="dropbtn">Filter</button>
                      <div className="dropdown-content">
                          <form className="filter">
                              <div>
                                  <label className="form-label">Min Base Stats: </label>
                                  <span>{minBase}</span>
                                  <input className="slider" type="range" min="300" max="600" step="5" onChange={e => filterByBase(e.target.value)}/>
                              </div>
                              <div>
                                  <label className="form-label">Min Weight: </label>
                                  <span>{minWeight} kg</span>
                                  <input className="slider" type="range" min="0" max="100" step="1" defaultValue="0" onChange={e => filterByWeight(e.target.value)}/>
                              </div>
                              <div>
                                  <label className="form-label">Min Height: </label>
                                  <span>{minHeight} m</span>
                                  <input className="slider" type="range" min="0" max="3" step="0.1" defaultValue="0" onChange={e => filterByHeight(e.target.value)}/>
                              </div>
                          </form>
                      </div>
                  </div>
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