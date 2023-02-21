import {useState} from "react"
export default function Contact()
{
    // setting form data states
const [formData,setFormData] = useState({firstName:"",secondName:"",email:"",textarea:"",agree: true,gender:"",craft:""})

// setting onChange function on each form element
function onChange(e)
{
    // destracturing some elements form browser event
    const {name,type,value,checked} = e.target

    // determining setformData function
    setFormData((prevFormData)=>{
        return {...prevFormData, [name]: type==="checkbox" ? checked : value}
        
    })
}

// setting handle SUbmit function
function handleSubmit(e){
    e.preventDefault()
    alert("form submitted")
}


    return (
        <div className="container-fluid p-3 mb-2 bg-warning-subtle text-emphasis-warning">
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Impedit, quibusdam. Sint, quia ullam? Sequi eum suscipit culpa error
                  vero exercitationem eaque dicta quis beatae ad nam veniam ratione, 
                  illum ea perferendis, ipsum dolor, repellat ipsa. Repudiandae rem aliquam cum!
                   Aspernatur dolores laudantium ipsum quaerat quam voluptas ab enim? Aspernatur,
                    bgender
                    </p>
                    <h3>Fill this form for subscription</h3>
        <form onSubmit={handleSubmit} >
             {/* setting input boxes of text type */}
               
                    <input type="text" value={formData.firstName} name="firstName" placeholder="first name" onChange={onChange} /> <br/>
                    <input type="text" value={formData.secondName} name="secondName" placeholder="second name" onChange={onChange} /><br/>
                    <input type="email" value={formData.email} name="email" placeholder="email" onChange={onChange} /><br/>
                    <textarea value={formData.textarea} name="textarea" placeholder="comment" onChange={onChange}      /><br/>
                    <input  type="checkbox"  id="agree"  checked={formData.agree} onChange={onChange} name="agree"/>

                    {/* setting input box for checkbox */}
            <label htmlFor="agree">Agree to terms and condition</label>
           {/* setting input box for radio button */}
            <fieldset>
                <legend>GENDER</legend>
                
                <input 
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={onChange}
                />
                <label htmlFor="male">Male</label>
                <br />
                
                <input 
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={onChange}
                />
                <label htmlFor="female">Female</label>
                <br />
                
                <input 
                    type="radio"
                    id="unspecify"
                    name="gender"
                    value="unspecify"
                    checked={formData.gender === "unspecify"}
                    onChange={onChange}
                />
                <label htmlFor="unspecify">Unspecify</label>
                <br />
                
            </fieldset>
       {/* setting input box for select  */}
            <label htmlFor="craft" >Whats your prefered craft</label>
            <select id="craft" name="craft" value={formData.craft} onChange={onChange}>
              <option value="" >---Choose---</option>
               <option value="sandals" >Sandals</option>
               <option value="art" >Arts</option>
               <option value="tShirts" >T SHIRTS</option>
            </select>
<br/> <br/>
        <button>Submit</button>
            </form>
        </div>
    )
}