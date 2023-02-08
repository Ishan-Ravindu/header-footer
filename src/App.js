import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Header/Search";
import LoginButton from "./Components/Header/LoginButton";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import LearnMore from "./Components/LearnMore";

function App() {
  // return <Header />;
  // return <Search />;
  // return <LoginButton />;
  return (
    <>
      <Header />
      <div style={{ height: "50vh" }}></div>
      <div
        style={{
          marginBottom: "75px",
          minHeight: "400px",
          backgroundImage:
            "url(https://mui.com/static/images/cards/contemplative-reptile.jpg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LearnMore />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Events />
      </div>
      <Footer />
    </>
  );
}

export default App;
