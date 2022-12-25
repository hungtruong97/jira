import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Home/Header/Header";
import Login from "./pages/Login/Login";
import UserLoginTemplate from "./templates/HomeTemplate/UserLoginTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/about" Component={About} />
        <HomeTemplate exact path="/" Component={Home} />
        <UserLoginTemplate exact path="/login" Component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
