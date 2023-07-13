import React,{useState}  from "react";
// import Footer from "./Footer";
// import Headers from "./Headers";
// import Main from "./Main";
// import "./app.css"
// import Componentone from "./Componentone";


function App(){
  let [state,setState]=useState(0)
  return(
    <div>

      <h1>{state}</h1>
      <button onClick={
        function name(params) {
          setState(state+1)
        }
      }>increment</button>
      <button onClick={
        function name(params) {
          setState(state-1)
        }
      }>decrement</button>
    </div>
  )
}

// function App() {
  // var status=false;
  // let num1=20
  // let num2=10
  // let sum=0
  // sum=num1+num2
  
  // return (
    // <div>
      {/* /* /* /* <Headers/> */}
  {/* <Main/> */}
  {/* <Footer/> */   }
  // <Componentone title="vijin"/>

   

    // </div>
  

   

    // condition ? true:false
  //  <div>
  //   <h1>sum is..{sum}</h1>
    
  //   {/* /* {
  //   status?
  //   // true
  //   <div id="one">
  //     <h1>hello good morning</h1>
  //   </div>:
  //   // false
  //   <div id="two">
  //     <h3>welcome to softronics</h3>
  //   </div>
  //  */} 
  //  </div>


//   );
// }

export default App;
