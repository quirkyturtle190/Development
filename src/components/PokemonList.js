import "./PokemonList.css";
export default function PokemonList(props){
    function removePokemon(){
        let temp = [...props.team];
        const index = props.team.map(function(e) { return e.name; }).indexOf(props.info.name);
        console.log(index);
        if (index > -1) {
            temp.splice(index, 1);
        }
        props.setTeam(temp)
        props.setBase(props.base - props.info.base)
    }
    return (
        <div className="list-item">
            <div>
                <button onClick={() => removePokemon()}>X</button>
            </div>
            <div>
                <h1>{props.info.name} </h1>
            </div>
            <div>
                <h1>Base Stats Total: {props.info.base}</h1>
            </div>
        </div>
    );
}

