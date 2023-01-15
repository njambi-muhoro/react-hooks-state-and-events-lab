import React,{useState} from "react";

function Item({ name, category }) {
  const[inCart, setCart] = useState(false)
  
  function handleClick(){
      setCart(!inCart)
  } 
  const itemClass = inCart? "in-cart":"";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart? "Remove from " : "Add to "} Cart</button>
    </li>
  );
}



export default Item;
