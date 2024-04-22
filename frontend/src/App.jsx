import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Screens/Landing page/Home"
import TermsOfService from "./Screens/TermsOfService";
import About from "./Screens/Landing page/About";
import NavController from "./Components/Navbars/NavController";
import Pricing from "./Screens/Landing page/Pricing";
import HomePage from "./Screens/Existing page/HomePage";
import NewUser from "./Screens/New Page/NewUser";

import Posts from "./Screens/Existing page/Posts";
import Statistics from "./Screens/Existing page/Statistics";
import ForgotPassword from "./Screens/Landing page/ForgotPassword";
import Channels from "./Screens/Existing page/Channels";
import Profile from "./Screens/Existing page/Profile";
import Messages from "./Screens/Existing page/Messages";
import Notifications from "./Screens/Existing page/Notifications";
import SignUp from "./Screens/Landing page/Signup";
import Login from "./Screens/Landing page/Login";
import Settings from "./Screens/Existing page/Settings";
import Basic from "./Screens/Existing page/Settings/Basic";
import AccountDetails from "./Screens/Existing page/Settings/AccountDetails";
import Membership from "./Screens/Existing page/Settings/Membership";
import CreatorsScreen from "./Screens/Existing page/Creators";
import CreatorDetailed from "./Screens/Existing page/CreatorDetailed";

function App() {
  return (
    <Router>
      <NavController/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/About" element={<About/>} />
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/TOS" element={<TermsOfService/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        {/*authentication*/}
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/NewUser" element={<NewUser/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/Statistics" element={<Statistics/>}/>
        <Route path="/Channels" element={<Channels/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Messages" element={<Messages/>}/>
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path="/creator/" element={<CreatorsScreen/>}/>
        <Route path="/creator/:id" element={<CreatorDetailed/>}/>
        <Route path="/Settings/AccountDetails" element={<AccountDetails/>}/>
        <Route path="/Settings/Basic" element={<Basic/>}/>
        <Route path="/Settings/MemberShips" element={<Membership/>}/>

      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
