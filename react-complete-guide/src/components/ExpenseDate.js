import "./ExpenseDate.css";

function ExpenseDate(props) {
  const { date } = props;

  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
      <p className="expense-date__day">{day}</p>
    </div>
  );
}

export default ExpenseDate;
