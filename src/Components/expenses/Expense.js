import "./Expense.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

import ExpensesList from "./ExpensesList";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (SelectedYear) => {
    console.log("in expenses.js");
    console.log(SelectedYear);
    setFilteredYear(SelectedYear);
  };

  const FilteredExpense = props.items.filter((Expense) => {
    return Expense.date.getFullYear().toString() === filteredYear;
  });

  // ## dded to diff file clled expenseslist
  // let expensesContent = <p>No Expense found</p>;

  // if (FilteredExpense.length > 0) {
  //   expensesContent = FilteredExpense.map((Expense) => (
  //     <ExpenseItem
  //       key={Expense.id}
  //       title={Expense.title}
  //       amount={Expense.amount}
  //       date={Expense.date}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onDropdownChange={filterChangeHandler}
      />

      <ExpensesList items={FilteredExpense}/>

      {/* conditional rendering  1*/}
      {/* {FilteredExpense.length === 0 ? (
        <p>No Expense found</p>
      ) : (
        FilteredExpense.map((Expense) => (
          <ExpenseItem
            key={Expense.id}
            title={Expense.title}
            amount={Expense.amount}
            date={Expense.date}
          />
        ))
      )} */}

      {/* conditional rendering 2 with js trick
      commenting this also because we can ue a variable to store jsx etc done above check once marked with
      ## */}

      {/* {FilteredExpense.length === 0 && <p>No Expense found.</p>}
      {FilteredExpense.length > 0 &&
        FilteredExpense.map((Expense) => (
          <ExpenseItem
            key={Expense.id}
            title={Expense.title}
            amount={Expense.amount}
            date={Expense.date}
          />
        ))} */}

{/* conditional rendering  3 where we used if condition above ##*/}
        {/* {expensesContent}
         */}

      {/* normal rendering */}
      {/* {FilteredExpense.map((Expense) => (
        <ExpenseItem
          key={Expense.id}
          title={Expense.title}
          amount={Expense.amount}
          date={Expense.date}
        />
      ))} */}




      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expense;
