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

  return (
    <Card className="expenses">
      <ExpensesFilter selectedFilter={enteredFilter} onFilterChange={filterHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
