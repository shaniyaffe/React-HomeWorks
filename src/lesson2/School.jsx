import Student from "./Student"

const School = () => {

    const students=[
    {id:1, name:"Dan", age:6,average:91},
    {id:2, name:"Roni", age:10,average:71},
    {id:3, name:"Avi", age:6,average:60},
    {id:4, name:"Noam", age:10,average:88},
    {id:5, name:"Elia", age:7,average:52},
    {id:6, name:"Jojo", age:9,average:81},
    {id:7, name:"Gadi", age:12,average:49},
    {id:8, name:"Uriel", age:14,average:97},
    {id:9, name:"Itai", age:13,average:100},
]
const handleExit = (name) => {
    console.log("The gate is open")
}

return(
    <>
    <h1>School</h1>
    {students.map((student) => (
        <Student key={student.id} 
        name={student.name} 
        age={student.age} 
        average={student.average}
        onExit={handleExit}
        />
    ))}
    </>
)
}
export default School

