import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import  * as fn from './function.js';
import './App.css';

class LoginForm extends Component
{
constructor(props)
{
  super(props);
  this.state={email:"",password:""};
  this.mySubmitHandler = this.mySubmitHandler.bind(this);
}
myChangeHandler=(event)=>{
  let name=event.target.name;
  let value=event.target.value;
this.setState({[name]:value});
};
mySubmitHandler = (event) => {
  
  let email = this.state.email;
  let password=this.state.password;
  alert("Email:"+email);
  alert("Password:"+password);

  if(email!="admin@namasys.co")
  {
    alert("username/password invalid");
return false;
  }
  else
  {
if(password!="admin123")
{
  alert("Invalid Password try with different.");
return false;
}
}



}

render()
{
return (



<div className='bg'>

<form action="home.html" id='loginForm' className='form-horizontal' method="get" onSubmit={this.mySubmitHandler}>

  <div className='form-group'>

    <label ><b>Email</b></label>
    <input type="email" id='email' onChange={this.myChangeHandler}  className='form-control'  name="email" required /><br />
</div>
<div className="form-group">

    <label ><b>Password</b></label>
    <input type="password" onChange={this.myChangeHandler} className='form-control' name="password" required /><br/>
</div>
<div className='form-group'>
    <button type="submit" className='btn btn-primary'>Login</button>
</div>
</form>

</div>




);
}
}



export default class App extends Component
{
render()
{
return <LoginForm />;
}
}