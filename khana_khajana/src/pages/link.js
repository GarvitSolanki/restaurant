import { Login } from "./login";
import ItemContainer from "./Item"
import React, { useState } from "react";
import { Register } from "./register"

const Link = (props) => {

  const [currentForm, setCurrentForm] = useState('login');
  const [islogin,setlogin]=useState(false)
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
	return(
		<div>
		{   
	        currentForm === "login" ? <Login onFormSwitch={toggleForm}  setlogin={setlogin}/>  : <Register onFormSwitch={toggleForm} />
      	}
      </div>
      )

}

export default Link;