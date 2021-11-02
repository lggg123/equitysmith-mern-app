import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import BecomeAnAdvisor from "./pages/BecomeAnAdvisor/BecomeAnAdvisor";
import Blog from "./pages/blog/Blog";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy"
import ContactUs from "./pages/ContactUs/ContactUs";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>    
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/become-an-advisor">
          <BecomeAnAdvisor />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/register">
		  	<Register />
        //  {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
		  	<Login />
        //  {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
		  	<Settings />
        //  {user ? <Settings /> : <Register />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
