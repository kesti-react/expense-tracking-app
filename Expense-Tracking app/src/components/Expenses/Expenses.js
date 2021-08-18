import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense)=>(
    expense.date.getFullYear().toString() === filteredYear 
  ));

/* We can assign JSX code to a variable in JavaScript */

  // let expensesContent = <p>No Expenses found on the selected Year</p>;

  // if(filteredExpenses.length > 0 ){
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key = {expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onSelectedYear={filterChangedHandler}
        />
        {/* {expensesContent}*/}
        <ExpenseChart expenses ={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
