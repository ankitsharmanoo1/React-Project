import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

// import React,{ useState } from "react";

// import Card from '../UI/Card';

const  ExpenseItem = (props) =>
{ 
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () =>{
    //     setTitle(newTitle)
    // }
    // const [newTitle, setNewTitle] = useState(" hey");
        
    // const changeHandler = (event) => {
    //      setNewTitle(event.target.value);
    // }


    
    return(
            <div className='expense-item'>
               <ExpenseDate  date={props.date}/>
                <div className='expense-item__description'>
                    <h2> { props.title }</h2>
                    <div className='expense-item__price'> ${props.amount}</div>
                </div>
            </div>
        )
}

export default ExpenseItem;