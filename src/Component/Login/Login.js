import { React } from "react";
import { Button } from "react-bootstrap";
import moment from"moment";
import { Field, reduxForm } from "redux-form";
import {CheckLoginData, submitSVG } from "../CommonFunc";
import { useNavigate } from "react-router";

const date = moment().format('YYYY-MM-DD HH:mm:ss');
const LoginForm = (props) => { 
  return (
    <div className="mb-3 d-flex justify-content-evenly">
      <form onSubmit={props.handleSubmit}>
        <div className="mb-5">
        <label>User name</label>
          <Field className="form-control form-control-lg ml-10" component='input' name={"name"} placeholder="Alexander" /></div>
        <div className="mb-5">
          <label>User password</label>
          <Field className="form-control form-control-lg"component='input' name={"password"} placeholder="qwerty"/>
          </div>
          <div className="d-flex justify-content-evenly">
          <Button className="bg-success" type="submit">{submitSVG} Submit</Button>
          </div>
        <div className="text-center mb-2">If you don't have an user account, please fill the regestration form</div>
      </form>
  </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const navigate=useNavigate();
   function onSubmit(formData){
    const data= props.table.table;
    let fData = new FormData();  
        fData.append("tLog",date);
        fData.append("name",formData.name);
        fData.append("password",formData.password);
    let result=CheckLoginData(data,formData);
    if(result===true)
        {props.getLogTC(fData)
          props.userAC({name:formData.name,password:formData.password,status:'Active'})
        navigate('/');}      
      };
      
  return (
    <div className="container my-5">
     <div className="mx-auto mw-100" >
     <h1 className="text-center" >Login</h1>
     </div>
     <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  );
};
export default Login;