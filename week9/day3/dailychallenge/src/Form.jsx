import React, { useState } from "react";

const Form = ()=>{

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const[destination, setDestination] = useState('')
    const [nutsfree, setNutsfree] = useState(false)
    const[lactosefree, setLactosefree] = useState(false)
    const[vegan, setVegan] = useState(false)
    const [submittedData, setSubmittedData] = useState()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstname") setFirstname(value)
        if ( name === "lastname")  setLastname(value)
        if(name === "email") setEmail(value)
    };

    const handleRadioChange = (e) => {
        setGender(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        name === "lactosefree" ? setLactosefree(true) : setLactosefree(false)
        name === "vegan" ? setVegan(true) : setVegan(false)
    };

    const handleSelectChange = (e) => {
        setDestination(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Firstname : ${firstname}`);
        console.log(`Lastname : ${lastname}`);
        console.log(`Email : ${email}`);
        console.log(`Gender : ${gender}`);
        console.log(`Nuts free : ${nutsfree}`);
        console.log(`Lactose free : ${lactosefree}`);
        console.log(`Vegan : ${vegan}`);
        console.log(`Destination : ${destination}`);

        const data = {
            firstname, 
            lastname,
            email,
            gender,
            nutsfree,
            lactosefree,
            vegan,
            destination
        }

        setSubmittedData(data)

    };


    return(
        <>
        <form action="">
        <input onChange={handleInputChange} type="text" name="firstname" placeholder="Firstname" />
        <br />
        <input onChange={handleInputChange} type="text" name="lastname" placeholder="Lasttname" />
        <br />
        <input onChange={handleInputChange} type="email" name="email" placeholder="Email" />
        <br />

        <label htmlFor="male">Male
        <input onChange={handleRadioChange} type="radio" name="gender" value={'male'} />
        </label>
        <label htmlFor="female">Female
        <input onChange={handleRadioChange} type="radio" name="gender" value={'Female'} />
        </label>

        <br />

        <select onChange={handleSelectChange} name="select">
            <option value="">-- Select a destination --</option>
            <option value="Paris">Paris</option>
            <option value="Las Vegas">Las Vegas</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Tel Aviv">Tel Aviv</option>
        </select>
        <br />

        Nuts free       <input onChange={handleCheckboxChange} type="checkbox" name="nutsfree" value={'Nuts Free'} /><br />
        Lactose free    <input onChange={handleCheckboxChange} type="checkbox" name="lactosefree" value={'Lactose Free'} /><br />
        Vegan           <input onChange={handleCheckboxChange} type="checkbox" name="vegan" value={'Vegan'} /> <br />

        <button onClick={handleSubmit} type="submit"> Submit </button>
        </form>

        {submittedData && (
                <div>
                    <h2>Submitted Data</h2>
                    <p>Firstname: {submittedData.firstname}</p>
                    <p>Lastname: {submittedData.lastname}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Gender: {submittedData.gender}</p>
                    <p>Destination: {submittedData.destination}</p>
                    <p>Nuts free: {submittedData.nutsfree ? "Yes" : "No"}</p>
                    <p>Lactose free: {submittedData.lactosefree ? "Yes" : "No"}</p>
                    <p>Vegan: {submittedData.vegan ? "Yes" : "No"}</p>
                </div>)}
        </>
    )
}

export default Form