import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { deposit, depositAsync, withdraw } from "./reducers/transaction";

function App() {
  const dispatch = useDispatch();
  const transaction = useSelector((state) => {
    return state.transaction;
  });
  return (
    <>
      <p>Balance : $ {transaction.balance}</p>

      <div>
        <button style={{ marginRight: 10 }} onClick={() => dispatch(deposit())}>
          Deposit $10
        </button>
        <button onClick={() => dispatch(withdraw())}>Withdraw $9</button>
        <button onClick={() => dispatch(depositAsync())}>
          Deposit $10 after 2 sec
        </button>
      </div>
    </>
  );
}

export default App;
