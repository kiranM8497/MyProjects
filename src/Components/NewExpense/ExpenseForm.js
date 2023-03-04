import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  //multiple state approach
  const [enteredTitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //single state approach
  // const [userInput, changeUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //multiple state approach
    console.log(event.target.value);
    setEnteredtitle(event.target.value);

    /* single state approach
    here we are depending on prev state by using spread operator t copy other value while updating one
    but as react schedules the updates it does not do it instantly so scheduling n number of changes in state might not be accurate
    so instead use another approach
    changeUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });

    VIMP
    instead use this approach when you state update depends on previous state
    changeUserInput((prevState)=>{
        return {
          ...prevState,
          enteredTitle: event.target.value
        }

    });*/
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // changeUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);

    // changeUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event)=>{
    //it will prevent form submitting 
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData);
    //we are executing here onSave
    props.onSaveExpenseData(expenseData);
    setEnteredtitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  value={enteredTitle}  onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button"onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
