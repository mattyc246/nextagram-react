import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const SignUpForm = props => {
  return (
    <>
      <Container fluid className="h-100" style={styles.formContainer}>
        <Row
          className="justify-content-center w-100 h-75"
          style={styles.signUpForm}
        >
          <Col className="h-100" md="4">
            <Card className="h-100" body>
              Hi
            </Card>
          </Col>
          <Col className="h-100" md="4">
            <Card className="h-100" body>
              <h4 className="text-center">Sign Up</h4>
              <Form>
                <FormGroup>
                  <Label>Username</Label>
                  <Input />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input />
                </FormGroup>
                <small>Already registered? Sign In Here</small>
                <Button className="mx-auto d-block mt-3">Sign Up</Button>
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
  }
};

export default SignUpForm;
