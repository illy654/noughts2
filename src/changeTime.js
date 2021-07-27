const changeTime = ({ decreaseBoardIndex, increaseBoardIndex }) => {
    return (
        <div className="changeTime">
            <button className="moveBackwards" onClick={decreaseBoardIndex}>{"<--"} </button>
            <button className="fastForward" onClick={increaseBoardIndex}>{"-->"}</button>
        </div>
    );
}

export default changeTime;



