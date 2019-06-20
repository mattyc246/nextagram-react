import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import SignUpForm from "./components/SignUpForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <>
        <NavBar currentUser={currentUser} />
        {currentUser ? <NewsFeed /> : <SignUpForm />}
      </>
    );
  }
}

export default App;
