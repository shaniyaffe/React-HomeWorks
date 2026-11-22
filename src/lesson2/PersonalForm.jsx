const PersonalForm = () => {

  const handleChange = (e) => {
            console.log("typing...",e.target.value) 
        }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form submitted successfully")
     }

    return(
        <>
        <h1>Personal Form</h1>
        <form onSubmit={handleSubmit}>
            <input  placeholder="first name"  onChange={handleChange} />
            <input  placeholder="last name "  onChange={handleChange} />
            <input  placeholder="phone number"  onChange={handleChange} />
            <button type="submit">submit</button>
        </form>  
        </>
    )
}
    export default PersonalForm
