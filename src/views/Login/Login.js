import React, { useState } from "react";
import './Login.css'
import userimg from './user.png'
import passwordimg from './padlock.png'
import IMG from './img.PNG'
import toast , {Toaster}from "react-hot-toast";
import {Link} from 'react-router-dom';
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'
const Login=()=>
 {
	const [username, setUsername] = useState('');
	const [password , setPassword] = useState('');
    
      const handleLogin = () => {
        const storeData =localStorage.getItem(username);
    
        if (storeData)
		 {
			const userData = JSON.parse(storeData);
          if (userData.password === password)       
		 {
            toast.success('Login successful !');
          }
		   else {
           toast.error('Incorrect password');
          }
        } 
		else {
         toast.error('User not found !')
        }
		const LoginUser = { username, password };
        localStorage.setItem(username, JSON.stringify(LoginUser));
      };

  return (
    <>
	<Navbar/>
    <div className="login-main-container">
		<div className="left-container">
			<div className="welcome-heading">
				<h1 className="liner-text">
					Welcome back !!!!
				</h1>
				<h3 className="text-margin">
					Have an account ?
				</h3>
				<h6 className="text-margin">
					Login to access  information
				</h6>
			</div>
			<form>
				<div>
					<label className="text-feild">Username</label>
					<div className="input-with-icon">
						<img
							src={userimg}
							alt="password icon"
							className="icon"
						/>
						<input type="text" 
						       name="email" 
						       id="email"
							    className="email" 
								placeholder="Type your username" 
								value={username}
                                onChange={(e)=> setUsername(e.target.value)}/>
					</div>
				</div>
				<div>
					<label className="text-feild">Password</label>
					<div className="input-with-icon">
						<img
							src={passwordimg} 
							alt="password icon"
							className="icon"
						/>
					<input type="password" 
					       name="password" 
						   id="passw" 
						   className="passw" 
						   placeholder="Type your password"
						   value={password}
                           onChange={(e)=> setPassword(e.target.value)} />

				</div>
				</div>
				<div className="forgot-text">
				<Link to='/setting'>Forgot password ?</Link>
				</div>
				<button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
				<Toaster/>
			</form>
			<div className="last-line">
				Don't have an account ?        <Link to='/signup'>Sign up</Link>
			</div>
		</div>
		<div className="right-container">
			<img src={IMG} className="image" />
		</div>
      </div>
	  <div className="show">
	  </div>
	  <Footer/>
    </>
  )
}

export default Login