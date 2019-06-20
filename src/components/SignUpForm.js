import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  CardSubtitle
} from "reactstrap";
import iPhone from "../images/iphone-png.png";

const SignUpForm = props => {
  const { username, email, password, confirmPassword } = props.formData;
  return (
    <>
      <Container fluid className="h-100" style={styles.formContainer}>
        <Row
          className="justify-content-center w-100 h-75"
          style={styles.signUpForm}
        >
          <Col md="4">
            <img src={iPhone} style={styles.iphoneImage} />
          </Col>
          <Col md="4">
            <Card className="h-100" body>
              <h2 className="text-center alt-font">Instagram</h2>
              <CardSubtitle className="mt-2 mb-2 text-muted text-center">
                Sign Up to see photos and videos from your friends.
              </CardSubtitle>
              <Form
                onSubmit={e => {
                  props.handleSubmit(e);
                }}
              >
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={e => {
                      props.handleInput(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => {
                      props.handleInput(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => {
                      props.handleInput(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => {
                      props.handleInput(e);
                    }}
                  />
                </FormGroup>
                <small>
                  Already registered? <a href="/">Sign In Here</a>
                </small>
                <Button
                  color="primary"
                  size="sm"
                  className="mx-auto d-block mt-3 w-100"
                  type="submit"
                >
                  Sign Up
                </Button>
                <hr />
                <div className="w-75 text-center mx-auto">
                  <p>
                    By signing up, you agree to our, <strong>Terms</strong>,{" "}
                    <strong>Data Policy</strong> and{" "}
                    <strong>Cookies Policy</strong>.
                  </p>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const styles = {
  signUpForm: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)"
  },
  formContainer: {
    position: "relative"
  },
  iphoneImage: {
    width: "85%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default SignUpForm;
