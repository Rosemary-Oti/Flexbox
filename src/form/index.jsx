import React, { useState } from 'react';
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [problems, setProblems] = useState("");
  console.log(name)


function handleSubmit(e) {
  e.preventDefault()
  console.log(name, password, email, problems)
}

  return (
    <form className='form_container' 
    onSubmit={handleSubmit}>
      <div className='form_body'>
        <label className='form_label'>Name </label>
            <input type="text" className='input_color' value={name} onChange={(e)=>{setName(e.target.value);}}/>
      </div>
      <div className='form_body'>
        <label className='form_label'>Password</label>
          <input type="password" className='input_color' value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
      </div>
      <div className='form_body'>
        <label className='form_label'>Email</label>
            <input type="text" className='input_color' value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
      </div>
      <div className='form_body'>
        <label className='form_label'>Tell us your problems</label>
            <textarea type="text" className='input_textarea' value={problems} onChange={(e)=>{setProblems(e.target.value);}}/>
      </div>
        <input type='Submit' value="submit" className='form_btn' />
    </form>
  )
}

export default Form