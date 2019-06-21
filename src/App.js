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
      currentUser: false,
      signUpFormData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        validPassword: false,
        validUsername: false,
        validEmail: false,
        canSubmit: false,
        matchingPassword: false
      },
      users: []
    };
  }

  componentDidMount = () => {
    let currentUser = JSON.parse(localStorage.getItem("userInfo"));
    this.setState({
      currentUser: currentUser
    });
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
    let newSignUpData = {
      ...this.state.signUpFormData,
      [e.target.name]: e.target.value
    };
    const { username, password, confirmPassword, email } = newSignUpData;
    if (username && password && confirmPassword && email) {
      newSignUpData = {
        ...newSignUpData,
        canSubmit: true
      };
    }
    if (password === confirmPassword) {
      newSignUpData = {
        ...newSignUpData,
        matchingPassword: true
      };
    } else {
      newSignUpData = {
        ...newSignUpData,
        matchingPassword: false
      };
    }
    this.setState({ signUpFormData: newSignUpData });
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state.signUpFormData;

    Axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/users/",
      data: {
        username: username,
        email: email,
        password: password
      }
    })
      .then(response => {
        console.log(response);
        let jwt = response.data.auth_token;
        let newUser = response.data.user;
        localStorage.setItem("JWT", jwt);
        localStorage.setItem("userInfo", JSON.stringify(newUser));
        this.setState({
          signUpFormData: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            currentUser: newUser
          }
        });
      })
      .catch(error => {
        console.error(error.response);
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
