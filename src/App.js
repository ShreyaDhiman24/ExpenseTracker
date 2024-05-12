import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Book", amount: 94.67, date: new Date(2024, 4, 7) },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 3, 17),
  },
  { id: "e3", title: "new TV", amount: 794.97, date: new Date(2022, 4, 1) },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 3, 21),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className="main-heading">Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />{" "}
      {/* use of Probs: moving data from child to parent components */}
      <Expenses items={expenses} />{" "}
      {/* use of Probs: moving data from parent to child components */}
    </div>
  );
};

export default App;
