import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   const [isEditing, SetisEditing] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) =>{

   
   const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()

   }

   console.log(expenseData);
   props.onAddExpense(expenseData);

   SetisEditing(false);
}

const stopEditingHandler = () => {
  SetisEditing(false);
}


const startEditingHandler = (event) => {
  SetisEditing(true);


}
  return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
  </div>
}

export default NewExpense;