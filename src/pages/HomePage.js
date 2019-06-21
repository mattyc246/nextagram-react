import React from "react";
import Axios from "axios";
import NavBar from "../components/NavBar";
import NewsFeed from "../components/NewsFeed";
import SignUpForm from "../components/SignUpForm";

class HomePage extends React.Component {
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
      }
    };
  }

  componentDidMount = () => {
    let currentUser = JSON.parse(localStorage.getItem("userInfo"));
    this.setState({
      currentUser: currentUser
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

  handleLogin = (email, password) => {
    Axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        email: email,
        password: password
      }
    })
      .then(result => {
        let jwt = result.data.auth_token;
        let newUser = JSON.stringify(result.data.user);
        localStorage.setItem("JWT", jwt);
        localStorage.setItem("userInfo", newUser);
        this.setState({ currentUser: newUser });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  handleLogout = () => {
    localStorage.removeItem("JWT");
    localStorage.removeItem("userInfo");
    this.setState({
      currentUser: null
    });
  };

  render() {
    const { users } = this.props;
    const { currentUser, signUpFormData } = this.state;
    return (
      <>
        {currentUser ? (
          <>
            <NavBar
              currentUser={currentUser}
              handleLogout={this.handleLogout}
            />
            <NewsFeed users={users} />
          </>
        ) : (
          <SignUpForm
            formData={signUpFormData}
            handleInput={this.handleSignUpFormInput}
            handleSubmit={this.handleSignUpSubmit}
            handleLogin={this.handleLogin}
          />
        )}
      </>
    );
  }
}

export default HomePage;
