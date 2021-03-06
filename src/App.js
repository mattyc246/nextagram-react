import React from "react";
import "./App.css";
import Axios from "axios";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { users } = this.state;
    return (
      <>
        <Route
          exact
          path="/"
          component={props => {
            return <HomePage {...props} users={users} />;
          }}
        />
      </>
    );
  }
}

export default App;
