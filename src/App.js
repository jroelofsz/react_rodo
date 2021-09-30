import "./App.css";
import Navigation from "./components/Navigation.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Todo from "./components/Todos/Todo";
import categories from "./components/Categories/Categories";
import NotFound from "./components/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Auth/Login";
import Footer from "./components/Footer";
import PrivateRoute from "./components/Routing/PrivateRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/todos" component={Todo} />
            <PrivateRoute path="/categories" component={categories} />
            <Route path="/login" component={Login} />

            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
