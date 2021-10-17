import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../Common/Card';

function ExpenseItem(props){
 return(
     <Card className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
             <h2>{props.amount}</h2>
             <div className="expense-item__price">{props.title}</div>
         </div>
     </Card>
 );
}

export default ExpenseItem;