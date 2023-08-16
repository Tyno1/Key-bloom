import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
function App() {

  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ChakraProvider>

  );
}

export default App;
