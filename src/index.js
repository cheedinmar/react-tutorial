import React from 'react'
import ReactDom from 'react-dom'


//JSX RULES
//return single element
//div / section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting


//NESTED COMPONENTS, REACT TOOLS

function Greeting(){
   return (
     <div>
      <Person />
      <Message/>
      
   </div>
   );
}

const Person = () => <h2>John Doe</h2>;
const Message =() => {
  return <h4>This is my message</h4>;
};

//render method takes two things,
//what to render and where to render
ReactDom.render(<Greeting/> , document.getElementById('root '))