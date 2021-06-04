import { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const [enteredFilter, setEnteredFilter] = useState('2021');

  const filterHandler = selectedFilter => {
    setEnteredFilter(selectedFilter);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear === enteredFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedFilter={enteredFilter} onFilterChange={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
