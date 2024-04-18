import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "Book", amount: 94.67, date: new Date(2024, 4, 7) },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 3, 17),
    },
    { id: "e3", title: "new TV", amount: 794.97, date: new Date(2024, 4, 1) },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2024, 3, 21),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
