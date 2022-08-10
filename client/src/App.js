import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <AppRouter/>
  );
}

export default App;
