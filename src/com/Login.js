import React from 'react'
import '../login.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword ,auth} from '../config/firebase'
export default function Login() {
  const navigate = useNavigate()
  const login =()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value 
    // console.log("Hello world");
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log("scucces");
    navigate('/')
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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
          <h1 className='mb-3'>Login</h1>
<div className="input-group mb-3">
<span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-envelope"></i></span>
<input type="text" id='email' className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
<input type="password" id='password' className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"/>
</div>



<button className='btn btn-success btn2' onClick={login}>Login</button>
<Link to="/" className='mt-3 h'>Create Account</Link>
      </div>
  </div>
  )
}
