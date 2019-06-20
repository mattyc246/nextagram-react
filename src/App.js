import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import SignUpForm from "./components/SignUpForm";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: true,
      signUpFormData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      users: []
    };
  }

  componentDidMount = () => {
    Axios.get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        this.setState({
          users: result.data
        });
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  };

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
    const { currentUser, signUpFormData, users } = this.state;
    return (
      <>
        {currentUser ? (
          <>
            <NavBar currentUser={currentUser} />
            <NewsFeed users={users} />
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
