import Navigation from './components/Navigation'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/'>
            <div className="main-content">
              <Sidebar />
              <Main />
            </div>
          </Route>
          <Route path='/signup'>
            <div className="main-content">
              <Sidebar />
              <SignUp />
            </div>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
