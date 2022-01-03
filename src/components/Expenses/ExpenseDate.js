import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Card className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expesne-date-day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
