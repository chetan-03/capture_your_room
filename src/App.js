import Navigation from './components/Navigation'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={
            <div className="main-content">
              <Sidebar />
              <Main />
            </div>
          }>
          </Route>
          <Route path='/signup' element={
            <div className="main-content">
              <SignUp />
            </div>
          }>
          </Route>
          <Route path='/signin' element={
            <div className="main-content">
              <SignIn />
            </div>
          }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
