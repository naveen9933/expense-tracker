import { useState } from "react";
import ExpenseItem from "./components/Expenses/Expenses";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wodden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Trip",
    amount: 940,
    date: new Date(2024, 1, 14),
  },
  {
    id: "e6",
    title: "New Phone",
    amount: 12000,
    date: new Date(2024, 2, 12),
  },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 2900,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e8",
    title: "New Desk (Wodden)",
    amount: 4500,
    date: new Date(2024, 3, 12),
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
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
