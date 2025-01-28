
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";

import Header from "./Header";
import Navbar from "./component/Navbar";
import Carol from "./component/Carol";
import Soon from "./component/Soon";
import Servicee from "./component/Service";
import ServiceList from "./component/ServiceList"
import Footer from "./component/Footer"

function App() {
  

  return (
    <>
    
      <Header />
      <Navbar />
      <Carol />
      <Soon />
      <ServiceList />
      <Footer />
      
      
    </>
  );
}

export default App;
