import './App.css'
import ReactDOM from "react-dom/client"
import Footer from './footer/footer'
import { Blogs } from './Blogs/blogs'
import { Terms } from './tc/tc'
import { Header } from './header/header'
import { Home } from './Home/home'
import { About } from './About_us/aboutus'
import { Contact } from './Contact/contact'
import { LinkUs } from './Link_us/link'
import { Nav } from './Nav/nav'
import { Nav2 } from './Nav_2/nav2'
import { Login } from './Login/login'
import { Properties } from './Properties/Properties'
// import PrivacyPolicy from './Login/PrivacyPolicy'
//import { Comment } from './comment/comment'
import { RegisterForm } from './Register/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Burger_2 } from './Burger_2/burger_2'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Burger } from './Burger/burger'




function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <div className='Hamburger'>
            <Burger_2>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Blogs' element={<Blogs />} />
                <Route path='tc' element={<Terms />} />
                <Route path='About_us' element={<About />} />
                <Route path='Contact' element={<Contact />} />
                <Route path='Link_us' element={<LinkUs />} />
                <Route path='Login' element={<Login />} />
              </Routes>
            </Burger_2>
          </div>
         <div className='Hamburger-2'>
         <Burger>
            <Routes>
              <Route path='Link_us' element={<LinkUs />} />
              <Route path='About_us' element={<About />} />
              <Route path='Contact' element={<Contact />} />
              <Route path='Login' element={<Login />} />
            </Routes>
          </Burger>
         </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Blogs' element={<Blogs />} />
            <Route path='tc' element={<Terms />} />
            <Route path='About_us' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='Link_us' element={<LinkUs />} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element = {<RegisterForm />} />
            {/* <Route path='PrivacyPolicy' element={<PrivacyPolicy />}/> */}
            <Route path='Properties' element = {<Properties />} /> 
          </Routes>
        </Router><br/>
      </div>
    </>
  )
}

export default App
