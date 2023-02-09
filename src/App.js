import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './carry/home/home';
import SignUpUser from './carry/signUp/signUpUser';
import SignUpDriver from './carry/signUp/signUpDriver';
import SignUpMerchant from './carry/signUp/signUpMerchant';
import SignIn from './carry/signIn/signIn';
import User from './carry/user';
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up-user' element={<SignUpUser/>} />
        <Route path='/sign-up-driver' element={<SignUpDriver/>} />
        <Route path='/sign-up-merchant' element={<SignUpMerchant/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
