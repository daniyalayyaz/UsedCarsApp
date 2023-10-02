import "./App.css";
import { RoutersProvider } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RoutersProvider />
      <ToastContainer />
    </>
  );
}

export default App;
