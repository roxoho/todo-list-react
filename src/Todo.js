import {useState} from "react";
import "./style.css";

function Todo() {
    const[todos,setTodos]=useState([]);
    const[input,setInput]=useState("");
    const[idcount,setIdcount]=useState(0);

     function handleSubmit(){
        if(input){setIdcount(idcount+1);
        setTodos((todos)=>(
            todos.concat({
                text:input,
                id: idcount
            })
        ));}
        setInput("");
    };
const removeTodo=(id)=> setTodos((todos)=>todos.filter((t)=>t.id!==id));


  return (
    <div className="container">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value) }
        onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit();
            }
          }}
        placeholder="New Todo"/>
        <button
        onClick={handleSubmit}>Submit</button>
        <ul className="todos-list">
            {todos.map(({text,id})=>(
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={()=>removeTodo(id)}>X</button>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo