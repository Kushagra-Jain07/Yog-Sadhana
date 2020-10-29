import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from "./Screens/AboutScreen"
import ScheduleScreen from './Screens/ScheduleScreen';
import ContactScreen from './Screens/ContactScreen';

function App() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ color: "#08656e" }}>
          <Link className="navbar-brand" to="/">
            <img src="/images/nav.jpg" width="30" height="35" className="d-inline-block align-top" alt="" loading="lazy" />  Yog Sadhana</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse rightDisplay`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link borderHover" to="/" onClick={() => setIsNavCollapsed(true)}><i className="fa fa-home"></i> Home</Link>
                <div className="borderAppear"></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link borderHover" to="/about" onClick={() => setIsNavCollapsed(true)}><i className="fa fa-info-circle"></i> About</Link>
                <div className="borderAppear"></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link borderHover" to="/schedule" onClick={() => setIsNavCollapsed(true)}><i className="fa fa-calendar"></i> Schedule</Link>
                <div className="borderAppear"></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link borderHover" to="/contact" onClick={() => setIsNavCollapsed(true)}><i className="fa fa-phone"></i> Contact Us</Link>
                <div className="borderAppear"></div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="component">
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/schedule" component={ScheduleScreen} />
            <Route path="/contact" component={ContactScreen} />
          </Switch>
        </div>
        <footer className="container-fluid">
          <div className="row pt-2">
            <div className="col-12">
              <h3>Yog Sadhana</h3>
              <div className="colDiaplay">
                <h6><Link to="/about">About</Link></h6>
                <h6>&nbsp;|&nbsp;</h6>
                <h6><Link to="/schedule">Schedule</Link></h6>
                <h6>&nbsp;|&nbsp;</h6>
                <h6><Link to="/contact">Contact Us</Link></h6>
              </div>
            </div>
          </div>
          <hr />
          <div className="row copyRight">
            <h5>© 2020 Copyright: Yog Sadhana</h5>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
