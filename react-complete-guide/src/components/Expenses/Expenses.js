import { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [enteredFilter, setEnteredFilter] = useState('2021');

  const filterHandler = selectedFilter => {
    setEnteredFilter(selectedFilter);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedFilter={enteredFilter} onFilterChange={filterHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
