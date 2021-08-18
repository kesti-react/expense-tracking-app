import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const  savingExpenseForm = (newSubmitExpense) => {

        const expenseData = {
            ...newSubmitExpense,
            id: Math.random().toString()
        }
        

        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    
    return (
        <div className ="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
           
            {isEditing && <ExpenseForm onSavingExpenseForm={savingExpenseForm}   onCloseForm = {stopEditingHandler}/>}
        </div>
      );
}
 
export default NewExpense;