import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEdigintHandler = () => {
    setIsEditing(false);
  }

  const startEdigintHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && 
        <button type="button" onClick={startEdigintHandler}>Add New Expense</button>
      }
      {isEditing && 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={stopEdigintHandler}/>
      }
    </div>
  );
}

export default NewExpense;