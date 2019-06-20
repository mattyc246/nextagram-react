import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import SignUpForm from "./components/SignUpForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      signUpFormData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleSignUpFormInput = e => {
    const newSignUpData = {
      ...this.state.signUpFormData,
      [e.target.name]: e.target.value
    };
    this.setState({ signUpFormData: newSignUpData });
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      confirmPassword
    } = this.state.signUpFormData;

    this.setState({
      signUpFormData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    });
  };

  render() {
    const { currentUser, signUpFormData } = this.state;
    return (
      <>
        {currentUser ? (
          <>
            <NavBar currentUser={currentUser} />
            <NewsFeed />
          </>
        ) : (
          <SignUpForm
            formData={signUpFormData}
            handleInput={this.handleSignUpFormInput}
            handleSubmit={this.handleSignUpSubmit}
          />
        )}
      </>
    );
  }
}

export default App;
