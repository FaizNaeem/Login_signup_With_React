import React from 'react'
import '../signup.css'
import {auth, createUserWithEmailAndPassword ,app} from '../config/firebase'
// import { } from 'firebase/firestore'
import {collection,addDoc, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom';

export default function Signup() {
  const db = getFirestore(app);
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
    <div className=''>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> Faiz <i class="fa-solid fa-code"></i> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Link to="/login" class="btn btn-outline-success" type="submit">Login</Link>
      </form>
    </div>
  </div>
</nav>
        <div className="center">
          <div className='why'>

       
            <h1 className='mb-3 mt-5'>Signup</h1>
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

<button className='btn btn-success btn2' onClick={signup}>Signup</button>
<Link to="/login" className='mt-3 h'>Already have an account?</Link>
        </div>
        </div>
    </div>
  )
}
