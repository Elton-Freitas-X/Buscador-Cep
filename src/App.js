import {BrowserRouter as Router} from 'react-router-dom'

import Routes from "./routes";

import GlobalStyle from './global'

const App = () => 
   (
    <> 
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );


export default App;
