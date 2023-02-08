import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Header/Search";
import LoginButton from "./Components/Header/LoginButton";
import Footer from "./Components/Footer";
import Events from "./Components/Events";

function App() {
  // return <Header />;
  // return <Search />;
  // return <LoginButton />;
  return (
    <>
      <Header />
      <div style={{ height: "50vh" }}></div>
      <div style={{ marginBottom: "50px" }}>
        <Events />
      </div>
      <Footer />
    </>
  );
}

export default App;
