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
  Label
} from "reactstrap";
import iPhone from "../images/iphone-png.png";

const SignUpForm = props => {
  return (
    <>
      <Container fluid className="h-100 mb-3" style={styles.formContainer}>
        <Row
          className="justify-content-center w-100 h-75"
          style={styles.signUpForm}
        >
          <Col md="4">
            <img src={iPhone} style={styles.iphoneImage} />
          </Col>
          <Col md="4">
            <Card className="h-100" body>
              <h4 className="text-center">Sign Up</h4>
              <Form>
                <FormGroup>
                  <Label>Username</Label>
                  <Input type="text" name="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" name="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </FormGroup>
                <small>Already registered? Sign In Here</small>
                <Button
                  color="primary"
                  size="sm"
                  className="mx-auto d-block mt-3 w-100"
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
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  formContainer: {
    position: "relative"
  },
  iphoneImage: {
    width: "75%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default SignUpForm;
