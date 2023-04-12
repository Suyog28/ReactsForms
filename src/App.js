
import { useState } from "react";
import './App.css';

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true });

  // function firstNameHandler(event) {
  //   console.log("firstName function Called");
  //   console.log(event.target.value)
  // }

  // function lastNameHandler(event) {
  //   console.log("LastName function called");
  //   console.log(event.target.value);
  // }

  function formDataHandler(event) {

    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })

  }


  return (
    <div className="App container">
      <form>
        <fieldset>
          <legend> React Form Creations</legend>
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
            placeholder="Check."
            onChange={formDataHandler}
            name="check"
            checked={formData.isVisible}
          />
          <label>Is this invisible ? </label>
          <br /><br />
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
