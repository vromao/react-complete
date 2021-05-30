import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = props => {
  return (
    <Card className="expenses">
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
