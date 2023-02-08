import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Header/Search";
import LoginButton from "./Components/Header/LoginButton";
import Footer from "./Components/Footer";

function App() {
  // return <Header />;
  // return <Search />;
  // return <LoginButton />;
  return (
    <>
      <Header />
      <div style={{ height: "50vh" }}></div>
      <Footer />
    </>
  );
}

export default App;
