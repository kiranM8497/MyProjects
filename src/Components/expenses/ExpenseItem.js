import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React  from "react";
function ExpenseItem(props) {
  //a react hook that lets you change state of component
  //must be called inside a function component
  //pass initial state value
  // useState () returns array  of elemnets ne is    pointer to initial value and second element is function by which we can change value

  
  
  return (
    <ul>
      <Card className="expense-item">
        {/* we have to pass date as prop to its child component ExpenseDate as we passed from App to ExpenseItem
    so setting the prop */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price "> ${props.amount} </div>
        </div>
      </Card>
    </ul>
  );
}

export default ExpenseItem;
