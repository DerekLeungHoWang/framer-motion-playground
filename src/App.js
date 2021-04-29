import logo from './logo.svg';

import './App.css';
import AnimatedSideBar from './components/AnimatedSibeBar/AnimatedSideBar';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { AnimatePresence } from 'framer-motion';



function App() {
  return (

    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />

            </Switch>
          </AnimatePresence>
        )}
      />
      {/* <Navbar /> */}

    </Router>
  );
}

export default App;
