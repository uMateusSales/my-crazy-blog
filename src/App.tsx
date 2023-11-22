import "./App.css";
import { GlobalProvider } from "./context";
import Router from "./router";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </>
  );
}

export default App;
