import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import store from "./store/store.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

// Action {type and payload bokera hidnu}
// Reducer -> To handle the actions
// State (balance: 0)
// Store [Reducers[R1, R2, R3: {if type === add -> new state = old state + payload}], State]

// UI -> Subscribe the State
// Balance = state.balance
// Button 1 - Add balance     -> Event Handler -> Dispatches and action with a payload Eg: Action {type: 'add', payload: 10}
// Button 2 - Widhdraw balance -> Event Handler -> Dispatches and action with a payload Eg:  Action {type: 'withdraw', payload: 10}
