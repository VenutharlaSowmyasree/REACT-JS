import React,{useState} from "react";
import './App.css';
import './index.css';
function App(){
const [weight, setweight]=useState(0);
const [height,setheight]=useState(0);
const [bmi,setbmi]=useState('');
const [message, setmessage]=useState('');
let calculatebmi=(event) =>{
  event.preventDefault();
  if(weight === 0 || height === 0){
    alert("Invalid input");
  }
  else{
    let bmi=(weight / (height / 100) ** 2)
    setbmi(bmi.toFixed(2))

    if(bmi<18.5){
      setmessage("You are Underweight")
    }else if(bmi>=18.5 && bmi<=24.9){
      setmessage("You are Healthy!!")
    }else if(bmi>=25 && bmi<=29.9){
      setmessage("You are OverWeight")
    }else{
        setmessage("You are Obese")
    }
  }
}
let imgsrc;
if(bmi<1){
  imgsrc=null;
}
else if(bmi<18.5){
  imgsrc=require('./images/Underweight.jpeg');
}
else if(bmi>=18.5 && bmi<24.5){
  imgsrc=require('./images/Healthy.jpeg');
}
else if(bmi>=25 && bmi<29.9){
  imgsrc=require('./images/Overweight.jpeg');
}
else {
  imgsrc=require('./images/Obesity.jpeg');
}
let reload=() =>{
  window.location.reload();
}
return(
  
    <div className="app"> 
      <div className="container">
        <h2 className="center"> BMI Calculator</h2>
        <form onSubmit={calculatebmi}>
          <div>
            <label><h3>Enter Your Weight (Kg)</h3></label>
            <input value={weight} onChange={(e) => setweight(e.target.value)} />
          </div>
          <div>
            <label><h3>Enter Your Height (cm)</h3></label>
            <input value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
          <button className="btn" type="submit"><h5>Submit</h5></button>
          <button className="btn btn-outline" type="submit" onClick={reload}><h5>Reload</h5></button>
        </form>
        <div className="center">
        <h2>Your BMI is: {bmi}</h2>
        <p><h3>{message}</h3></p>
        </div>
        <div className="img-container">
        <img src={imgsrc} alt=""></img>
        </div>
        </div>   
    </div>
      
)
}

export default App;