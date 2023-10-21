import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./pages/componenets/AppHeader/AppHeader";
import AppFooter from "./pages/componenets/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Home />
      <AppFooter />
    </div>
  );
}

export default App;
