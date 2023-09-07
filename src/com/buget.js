import React, { useState } from 'react'
import '../signup.css'

export default function Buget() {
    let [input ,setinput] =useState("")
    let [input1 ,setinput1] =useState("")
    let [input2 ,setinput2] =useState("")
    const submit=()=>{
       

            let input = document.getElementById("name").value 
            let input1 = document.getElementById("age").value 
            let input2 = document.getElementById("class").value
            setinput(input)
            setinput1(input1)
            setinput2(input2)
      
       

    }
  return (
    <div>
        <div className='center'>
        <div className="input-group mb-3">

  <span className="input-group-text" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
  <input type="text" id='name' className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
  <input type="text" id='class' className="form-control" placeholder="Class" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
  <input type="number" id='age' className="form-control" placeholder="Age" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<button className='btn btn-success btn-sm' onClick={submit}>Submit</button>
<hr/>
<div className='row'>
<hr/>
<table>
    <th>
        Name
        <td>{input}</td>
    </th>
    <th>
        Class
        <td>{input1}</td>
    </th>
    <th>
        Age
    <td>{input2}</td> 
    </th>
</table>
</div>
        </div>
    </div>
  )
}
