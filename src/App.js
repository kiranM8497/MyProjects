import React, {useState} from "react";
import Expense from "./Components/expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";


const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  { id: "e2", title: "new TV", amount: 700, date: new Date(2023, 4, 23) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 1, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 299,
    date: new Date(2023, 0, 28),
  },
];


function App() {
      const [Expenses,setExpenses]=useState(Dummy_Expenses);

  const addExpenseHandler = (expenseDataRecieved) =>{
    setExpenses(prevExpenses=>{
      return [expenseDataRecieved,...prevExpenses]
    });
    // console.log("in App.js");
    // console.log(expenseDataRecieved);
  };
  
  // under the hood jsx is getting transformed into code like this
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Let's get Started"),
  //   React.createElement(Expense,{items: Expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expense items={Expenses} />
    </div>
  );
}

export default App;
