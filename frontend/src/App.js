import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import HomeScreen from './pages/HomeScreen';
import StudentPage from './pages/StudentPage';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          {/* <PrivateRoute component={HomePage} path="/" exact /> */}
          <Route component={HomeScreen} path="/" />
          <Route component={HomePage} path="/home" />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={StudentPage} path="/student" />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
