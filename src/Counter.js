import {useState} from 'react';
import "./style.css";

const Counter = () => {
    const [count,setCount]=useState(0);
    function decrement(){
        if(count){
            setCount(count-1);
        }
        else{
            setCount(0);
        }
    }
  return (
    <>
    <div className="counter">
        <div className="number">{count}</div>
    </div>
    <section className="controls">
        <button className='increment' onClick={()=>setCount(count+1)}>+</button>
        <button className='decrement' onClick={decrement}>-</button>
        <button className='reset' onClick={()=>setCount(0)}>Reset</button>
    </section>
    </>
  )
}

export default Counter