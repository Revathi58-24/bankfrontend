import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Loan from './components/Loan';
import Signin from './components/Signin';
import Account from './components/Account'
import Footer from './components/Footer';
import LoanForm from './components/Loanform';
import Homeloan from './components/Homeloan';
import Autoloan from './components/Autoloan';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Mortgage from './components/Mortgage';
import Cash from './components/Cash';
import Service from './components/Service';
import Application from './components/Application';
import Profile from './components/Profile';
import { UserProvider } from './components/UserContext';

export default function App (){
 
  return (
    <UserProvider>
    <BrowserRouter>
   
        <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/loan" element={<Loan/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<Account />}/>
          <Route path="/loanform" element={<LoanForm/>}/>
          <Route path="/homeloan" element={<Homeloan/>}/>
          <Route path="/mortgage" element={<Mortgage/>}/>
          <Route path="/autoloan" element={<Autoloan/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cash" element={<Cash/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/application" element={<Application/>}/>
          <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
       
        <br/>
        <Footer/>
    </BrowserRouter>
    </UserProvider>
  );
}

//export default App