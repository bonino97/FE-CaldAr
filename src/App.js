import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
//

// Components
import Header from './shared/Header';
import Buildings from './components/Buildings';
import NewBuilding from './components/Buildings/NewBuilding';
import EditBuilding from './components/Buildings/EditBuilding';
import Dashboard from './components/Dashboard';
//

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/buildings' component={Buildings} />
            <Route exact path='/buildings/new' component={NewBuilding} />
            <Route exact path='/buildings/edit/:id' component={EditBuilding} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
