const Student = (props) => {

const handleExit = () => {
const time = new Date().toLocaleTimeString()
console.log(props.name + " - you left at: " + time)
props.onExit()
}

    return (
        <div>  
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Average: {props.average}</p> 
        {props.average > 90 ? <h4>Outstanding student</h4> : null}
        {props.average < 60 ? <h4>Needs improvement </h4> : null}
        <button onClick={handleExit}>Exit</button>
        </div>
    )
}
export default Student