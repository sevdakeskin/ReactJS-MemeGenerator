import React from "react";


function Form() {
    //firstName
    const [firstName, setFirstName] = React.useState("");
    // email
    const [email,setEmail] = React.useState("");
    // checkbox
    const [isComputer,setIsComputer] = React.useState(false);
    // radio
    const [status,setStatus] = React.useState("");
    //select
    const [favBrand,setFavBrand] = React.useState("");

    function handleFirstName(event){
        console.log(event.target.value);
        setFirstName(event.target.value);

    }


    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handleCheckbox(event){
        console.log(event.target.checked);
        setIsComputer(event.target.checked);

    }

    function handleRadioButton(event){
        console.log(event.target.checked);
        setStatus(event.target.value);

        console.log(status)
    }
    function handleSelect(event){
       setFavBrand(event.target.value);

    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(event);
    }
    console.log(favBrand);
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
            />

            <input 
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={handleEmail}
             />

             <input
                type="checkbox"
                checked={isComputer}
                onChange={handleCheckbox}
             />

             <input
                 type="radio"
                 value="full time"
                 name="fulltime"
                 checked={status ==="fulltime"}
                 onChange={handleRadioButton}
             />
             <label>Full Time</label>

             <input
             type="radio"
             value="parttime"
             name="parttime"
             checked={status === "parttime"}
             onChange={handleRadioButton}
             />
             <label>Part Time</label>

             {/** Radio button, Freelance -> freelance input radio */}

             
             <input
             type="radio"
             value="freelance"
             name="freelance"
             checked={status === "freelance"}
             onChange={handleRadioButton}
             />
             <label>Freelance</label>
             <br/>
             <br/>

            <label>What is your favorite brand?</label>

             <select
                 value={favBrand}
                 onChange={handleSelect}
                 name="favBrand"

             >
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="honda">Honda</option>
                <option value="tofas">Tofas</option>
                <option value="volvo">Volvo</option>
             </select>

            <button>Submit</button>

        </form>

    )
}
export default Form;