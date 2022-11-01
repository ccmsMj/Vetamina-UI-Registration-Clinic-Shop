import React from 'react'
import "./index.css";
import { IoPerson, IoLockClosed, Text, IoCallOutline, IoHome, IoMail, IoLogoSlack, IoPaw } from "react-icons/io5";
import logo from "../src/assets/img/logo.png";
import veterinarian from "../src/assets/img/veterinarian.png";
import axios from 'axios';

const App = () => {
  /*state = {
    selectFile:null
  }
  fileSelectHandler = event => {
    this.setState({
      selectedFile:event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('');
  }*/

  return (
    <div>
      <img src={logo} className="logo" />
      <div className="imgs">
              <div className="container-image">
                <img src={veterinarian} className="vet" />
              </div>
         </div>
      <div className="main1">
        <div className="sub-main">
          <div>

         <div className='head'>
          <h1 className='register'>Register</h1>

          <div className="second-input">
            <span class="icon"><IoPerson size="2em"/></span>
            <input type="text" placeholder="Owner Name" className="name" IoPerson/>
          </div>

          <div className="second-input">
            <span class="icon2"><IoCallOutline size="2em"/></span>
            <input type="text" placeholder="Phone Number" className="name"/>
          </div>

          <div className="second-input">
            <span class="icon"><IoHome size="2em"/></span>
            <input type="text" placeholder="Address" className="name" IoPerson/>
          </div>

          <div className="second-input">
            <span class="icon"><IoMail size="2em"/></span>
            <input type="text" placeholder="Email" className="name" IoPerson/>
          </div>

          <div className="second-input">
            <span class="icon"><IoPaw size="2em"/></span>
            <input type="text" placeholder="Clinic Name or Pet Shop name" className="name" IoPerson/>
          </div>
          <div className='check'>
            <input type="checkbox" value="clinic"/>Clinic 
            <input type="checkbox" value="shop"/>Pet Shop
          </div>
         </div>
        </div>

        </div>
      </div>
      <div className='main2'>

          <div className="second-input">
            <span class="icon"><IoPerson size="2em"/></span>
            <input type="text" placeholder="Username" className="name" IoPerson/>
          </div>

          <div className="second-input">
            <span class="icon"><IoLockClosed size="2em"/></span>
            <input type="password" placeholder="Password" className="name" IoPerson/>
          </div>

          <div className="second-input">
            <span class="icon"><IoLogoSlack size="2em"/></span>
            <input type="text" placeholder="REG # (BIR)" className="name" IoPerson/>
          </div>
          <h4 className='mayor'>Mayor’s Permit Regs# (BIR) jpg</h4>
          <div className="third-input">
            <input type="file" />
            <h4 className='mayor'>Accepted Files: jpg.</h4>
          </div>
      </div>
          <div className="login-button">
            <button>Register</button>
          </div>
    </div>
    
  );
}

export default App
