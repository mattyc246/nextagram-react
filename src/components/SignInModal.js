import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      email: "",
      password: ""
    }));
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.handleLogin(email, password);
    this.toggle();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <span
          className="btn-link"
          style={{ cursor: "pointer", display: "inline-block" }}
          onClick={this.toggle}
        >
          Sign In Here
        </span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => this.handleInput(e)}
                  name="email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => this.handleInput(e)}
                  name="password"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleSubmit()}>
              Sign In
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignInModal;
