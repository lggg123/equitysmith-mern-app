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
import Accounting from "./pages/Accounting/Accounting";
import Financial from "./pages/Financial/Financial";
import Insurance from "./pages/insurance/Insurance";
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
        <Route path="/accounting">
          <Accounting />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/become-an-advisor">
          <BecomeAnAdvisor />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/financial">
          <Financial />
        </Route>
        <Route path="/insurance">
          <Insurance />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
