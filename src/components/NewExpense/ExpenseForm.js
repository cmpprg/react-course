import './ExpenseForm.css'

const ExpenseForm = () => {
 return (
  <form>
    <div className='expense-report__controls'>
      <div className='expense-report__control'>
        <label>Title</label>
        <input type='text'/>
      </div>
    </div>
  </form>
 )
}

export default ExpenseForm;