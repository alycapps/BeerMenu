import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Menu from "./pages/menu";
import Admin from "./pages/admin";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Menu}/>
//           <Route exact path="/menu" component={Menu}/>
//           <Route exact path="/admin" component={Admin}/>
//         </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/beer/menu" component={Menu} />
        <Route exact path="/beer/admin" component={Admin} />
      </Switch>
    </div>
  </Router>
);

export default App;
