import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance.jsx";
import IncomeExpenses from "./components/IncomeExpenses.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
import { GlobalProvider } from "./context/GlobalState.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
