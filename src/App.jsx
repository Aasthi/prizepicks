import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// Pages imports
import Home from './pages/HomePage/Home.jsx'; 
import Header from './components/Header.jsx';

function App() {
  return (
    <Fragment> 
      <Header />
      <Routes> 
        <Route path='/' element={<Home />} /> 
      </Routes>
    </Fragment>
  );
}
export default App;