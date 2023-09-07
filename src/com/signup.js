import React from 'react'
import '../signup.css'
import {auth, createUserWithEmailAndPassword ,db,collection,addDoc} from '../config/firebase'
// import { } from 'firebase/firestore'

export default function Signup() {
    let signup =()=>{

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let name = document.getElementById("name").value
        let number = document.getElementById("number").value
        let Fname = document.getElementById("Fname").value
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in 
            const user = userCredential.user;
            try {
                const docRef = await addDoc(collection(db, "users"), {
               name:name,
               Father:Fname,
               number:number
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
  return (
    <div className='container'>
        <div className="center">
            <h1 className='mb-3'>Signup</h1>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
  <input type="text" id='name' className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
  <input type="text" id='Fname' className="form-control" placeholder="Father Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-envelope"></i></span>
  <input type="text" id='email' className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type="password" id='password' className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
  <input type="text" id='number' className="form-control" placeholder="Number" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<button className='btn btn-success' onClick={signup}>Signup</button>

        </div>
    </div>
  )
}
