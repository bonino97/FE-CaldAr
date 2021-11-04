import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './shared/Header';
import Buildings from './components/Buildings';
import NewBuilding from './components/Buildings/NewBuilding';
import EditBuilding from './components/Buildings/EditBuilding';

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Buildings} />
          <Route exact path='/buildings/new' component={NewBuilding} />
          <Route exact path='/buildings/edit/:id' component={EditBuilding} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
