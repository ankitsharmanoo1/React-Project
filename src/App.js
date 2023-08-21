import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [
        { id: 'e1', title: 'Milk', amount: 100, date: new Date(2020, 10, 20) },
        { id: 'e2', title: 'Tea', amount: 200, date: new Date(2020, 11, 20) },
        { id: 'e3', title: 'Water', amount: 50, date: new Date(2022, 12, 20) },
        { id: 'e4', title: 'Sugar', amount: 400, date: new Date(2022, 13, 20) }
];

const App = () => {


        const [expenses, setExpenses] = useState(DUMMY_EXPENSE);



const addExpenseHandler = (expense) =>{
        const  updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
}


    return (
<div>

       <NewExpense  onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}/>
</div>
        )
}

export default App


// to bi continue 5:57:00 on thursday