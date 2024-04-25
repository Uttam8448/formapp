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
  //starting me isVisible me true hai
  const [formData, setFormData] = useState({firstName: "", lastName: "", Email:"",comments:"",isVisible:false, mode:""});
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
  return (
    <div className="App">
      <form>
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
      <input type='radio' onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode==="Online-Mode"}></input>
      <label htmlFor='Online-mode'>Online Mode</label>
      <input type='radio' onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode"  checked={formData.mode==="Offline-Mode"}></input>
      <label htmlFor='Offline-mode'>Offline Mode</label>

      </form>
    </div>
  );
}
 
export default App;
