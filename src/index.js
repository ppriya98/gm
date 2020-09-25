import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const heading = {
  
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   fontSize: 'larger',
//   margin: '2%',
//   textShadow: 'rgb(42, 75, 165)'
  

// }

 let b= new Date();
 b=b.getHours();
 let greet='';
 const cssStyle = {};


if(b>=1 && b<12)
{
greet= "Good morning";
cssStyle.color = "Purple";

}
else if(b>=12 && b<19)
{
  greet="Good Afternoon";
  cssStyle.color = "Green";

}
else{
  greet="Good Night";
  cssStyle.color = "Red";

}


ReactDOM.render(
  <>
  <div>
  <h1 > Hello Sir,<span style={cssStyle}> {greet}</span> ,Time is {`${b}`}</h1>
  </div>
  </>,

  document.getElementById("root")
);