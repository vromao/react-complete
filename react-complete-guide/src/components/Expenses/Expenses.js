import { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [enteredFilter, setEnteredFilter] = useState('2021');

  const filterHandler = selectedFilter => {
    setEnteredFilter(selectedFilter);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear === enteredFilter;
  });

  const emptyExpenses = <p>No expenses found.</p>;

  const expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      price={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter selectedFilter={enteredFilter} onFilterChange={filterHandler} />
      { expensesContent.length ? expensesContent : emptyExpenses }
    </Card>
  );
}

export default Expenses;
