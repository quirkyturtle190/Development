import "./Pokemon.css";
export default function PokemonCard(props){
    function addToTeam(){
        if (props.team.filter(e => e.name === props.info.name).length !== 1 && props.team.length < 6) {
            props.setTeam([...props.team, props.info]);
            props.setBase(props.base + props.info.base)
        }
    }
    return (
    <div class="items">
        <img src={props.info.image}/>
        <h1>{props.info.name}</h1>
        <p>{props.info.description}</p>
        <p>Pokedex #{props.info.pokedex}</p>
        <p>Height: {props.info.height}m</p>
        <p>Weight: {props.info.weight}kg</p>
        <p>Base Stats Total: {props.info.base}</p>
        <button onClick={() => addToTeam()} > Add to Team!</button>
    </div>
    );
}