import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Meal from "./components/meal";
import Notify from "./components/notify";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Meal />
      <Notify />
      <Footer />
    </div>
  );
}

export default App;
