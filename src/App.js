
import { useState } from "react";
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", comments: "",
    isVisible: true, mode: "", favCar: ""
  });

  // function firstNameHandler(event) {
  //   console.log("firstName function Called");
  //   console.log(event.target.value)
  // }

  // function lastNameHandler(event) {
  //   console.log("LastName function called");
  //   console.log(event.target.value);
  // }

  function formDataHandler(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })

  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Form Data Submitted")
    console.log(formData);
  }

  return (
    <div className="App container">
      <form onSubmit={formSubmitHandler}>

        <h1> React Form Creations</h1>
        <hr></hr>
        <lable>FirstName: </lable>
        <input
          type="text"
          placeholder="FirstName"
          name="firstName"
          onChange={formDataHandler}
          value={formData.firstName}
        />
        <br /><br />

        <lable>LastName: </lable>
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          onChange={formDataHandler}
          value={formData.lastName}
        />
        <br /><br />

        <lable>Email: </lable>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={formDataHandler}
          value={formData.email}
        />
        <br /><br />

        <label>Comments: </label>
        <textarea
          placeholder="Enter your comments..."
          onChange={formDataHandler}
          name="comments"
          value={formData.comments}
        />
        <br /><br />

        <input
          type="checkbox"
          placeholder="Check"
          onChange={formDataHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I inVisible ? </label>
        <br /><br />
        <fieldset>
          <legend>Mode:</legend>
          <input type="radio"
            onChange={formDataHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
          />
          <label htmlFor="Online-Mode">Online Mode</label>
          <input type="radio"
            onChange={formDataHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Which is your most like Car ?</label>
        <select
          onChange={formDataHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="Tharr">Tharr</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Honda">Honda</option>
          <option value="BMW">BMW</option>
          <option value="Others">Others</option>

        </select>
        <br /><br />
        <button >Submit</button>

      </form>
    </div>
  );
}

export default App;
