import "./Pokemon.css";
export default function TeamCard(props){
    return (
        <div class="text">
            <p>{props.info.name}, Base: {props.info.base}</p>
        </div>
    );
}