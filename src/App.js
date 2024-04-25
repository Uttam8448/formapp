import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState(""); 
  // function changeFirstHandler(event){
  //   // console.log("first name");
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value);
  //   console.log(firstName);
  // }
  // function changeSecondHandler(event){
  //   // console.log("last name");
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);
  //   console.log(lastName);
  // }
  //starting 
  //this makes no need for fetching data when submit is clicked instead we will be having updated state and can seend easily 
  const [formData, setFormData] = useState({firstName: "", lastName: "", Email:"",comments:"",isVisible:false, mode:"",favCar:""});
  // console.log(formData);
  console.log(formData);
  function changeHandler(event){
    //target element removed
    // Destructuring event object
    const {name,value,checked,type}=event.target;
    setFormData(prevFormData => {
      return {
        //spreaded prevFormData
        ...prevFormData,
        // [event.target.name]:[event.target.value];
        [name]:type=='checkbox'?checked:value
      }
     
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="App">
      <form onnSubmit={submitHandler}>
      <input type="text" placeholder='first name' onChange={changeHandler} name="firstName" value={formData.firstName}></input>
      <br/><br/>  
      <input type="text" placeholder='last name' onChange={changeHandler} name="lastName" value={formData.lastName}></input>
      <br></br>
      <input type="text" placeholder='e-mail' onChange={changeHandler} name="Email" value={formData.Email}></input>
      <br></br>
      <textarea type="text" placeholder='enter your comments' onChange={changeHandler} name="comments" value={formData.comments}></textarea>
      <br></br>
      {/* checkbox value is not fetched using value but checked is used in order to get value of checkbox field */}
      <input type='checkbox' onChange={changeHandler} name="isVisible" checked={formData.isVisible} id="isVisible"></input>
      <label htmlFor="isVisible">Am i Visible ?</label>
      <br></br>
      {/* needed same name to implement radio button */}
      <fieldset>
        <legend>Mode:</legend>
      <input type='radio' onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode==="Online-Mode"}></input>
      <label htmlFor='Online-mode'>Online Mode</label>
      <input type='radio' onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode"  checked={formData.mode==="Offline-Mode"}></input>
      <label htmlFor='Offline-mode'>Offline Mode</label>
      </fieldset>

      {/* dropdown menu */}
      <label htmlFor='favCar'>Favourite Car</label>

      <select name='favCar' id="favCar" value={formData.favCar} onChange={changeHandler}>
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
          <option value="thar">Thar</option>
      </select>
      {/* <input type='submit' value='submit'></input> */}
      {/* by default type of button in form is submit */}
      {/* imp:: to make action perform after clicking this button we need to apply onSubmit to form not onClick to button */}
      <button>Submit</button>
      </form>
    </div>
  );
}
 
export default App;
