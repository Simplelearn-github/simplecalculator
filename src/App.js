
import { useState } from 'react';


import './App.css';


function App() {
const [number,setNumber]=useState('')
const[input,setInput]=useState(0)

  return (
   
    <center>
     
     <div className='containers'>
      <div>
     
     <input type='text' name='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
     </div>
 
        <div className='bss'>
        <button style={{backgroundColor:'green',color:'white'}} onClick={()=>setInput(eval(number))}>Result</button>
        </div>
       <div>Result is : <b style={{color:"red"}}>{input}</b></div>
       <div >
       <button onClick={()=>setNumber(number+1)}>1</button> 
       <button onClick={()=>setNumber(number+2)}>2</button> 
       <button onClick={()=>setNumber(number+3)}>3</button> 
       <button onClick={()=>setNumber(number+4)}>4</button> 
       <button onClick={()=>setNumber(number+5)}>5</button> 
       <button onClick={()=>setNumber(number+6)}>6</button> 
       <button onClick={()=>setNumber(number+7)}>7</button> 
       <button onClick={()=>setNumber(number+8)}>8</button> 
       <button onClick={()=>setNumber(number+9)}>9</button> 
       <div>
       <button onClick={()=>setNumber(number+'+')}>+</button> 
       <button onClick={()=>setNumber(number+'-')}>-</button> 
       <button onClick={()=>setNumber(number+'*')}>*</button> 
       <button onClick={()=>setNumber(number+'/')}>/</button> 
       <button style={{backgroundColor:'red',color:'white'}} onClick={()=>{setNumber('');setInput('')}}>Clr</button> 
       </div>
       
       </div>
    
      
       </div>
  </center>
  
  );
}

export default App;
