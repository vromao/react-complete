import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { id: Math.random().toString(), label: 'Jan', value: 0 },
    {  id: Math.random().toString(), label: 'Feb', value: 0 },
    {  id: Math.random().toString(), label: 'Mar', value: 0 },
    {  id: Math.random().toString(), label: 'Apr', value: 0 },
    {  id: Math.random().toString(), label: 'May', value: 0 },
    {  id: Math.random().toString(), label: 'Jun', value: 0 },
    {  id: Math.random().toString(), label: 'Jul', value: 0 },
    {  id: Math.random().toString(), label: 'Aug', value: 0 },
    {  id: Math.random().toString(), label: 'Sep', value: 0 },
    {  id: Math.random().toString(), label: 'Oct', value: 0 },
    {  id: Math.random().toString(), label: 'Nov', value: 0 },
    {  id: Math.random().toString(), label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 == January
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;