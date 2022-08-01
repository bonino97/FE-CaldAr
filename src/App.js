import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
//

// Components - Layout
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";
import Dashboard from "./components/Dashboard";
// Components - Buildings branch
import Buildings from "./components/Buildings";
import NewBuilding from "./components/Buildings/NewBuilding";
import EditBuilding from "./components/Buildings/EditBuilding";
// Components - Users branch
import Users from "./components/Users";
// Components - Boilers branch
import Boilers from "./components/Boilers";
import NewBoiler from "./components/Boilers/NewBoiler";
import EditBoiler from "./components/Boilers/EditBoiler";

//
import NewUser from "./components/Users/NewUser";
import EditUser from "./components/Users/EditUser";

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className="flex">
          <Sidebar />
          <div className="container">
            <Switch>
              {/* Rutas Dashboard */}
              <Route exact path="/" component={Dashboard} />
              {/* Rutas Buildings */}
              <Route exact path="/buildings" component={Buildings} />
              <Route exact path="/buildings/new" component={NewBuilding} />
              <Route
                exact
                path="/buildings/edit/:id"
                component={EditBuilding}
              />

              {/* Rutas Users */}
              <Route exact path="/users" component={Users} />
              <Route exact path="/users/new" component={NewUser} />
              <Route exact path="/users/edit/:id" component={EditUser} />

              {/* Rutas Boilers */}
              <Route exact path="/boilers" component={Boilers} />
              <Route exact path="/Boilers/new" component={NewBoiler} />
              <Route exact path="/Boilers/edit/:id" component={EditBoiler} />
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
