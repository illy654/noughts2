import "./Tile.css"

const Tile = ({value,id,changeValue}) => {
    console.log("Reload!")
    return (  
        <div className="ButtonPlace" id = {`Btn${id}`}>
        <h1><button className = "AlonButton" onClick = {changeValue}>{value}</button></h1>
        </div>
    );
}
 
export default Tile;