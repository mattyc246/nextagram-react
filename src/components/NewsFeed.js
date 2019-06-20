import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardFooter
} from "reactstrap";

const NewsFeed = props => {
  return (
    <Container fluid>
      {props.users.map((user, ind) => {
        return (
          <Row className="justify-content-center mt-3">
            <Col xs="9" sm="7" md="5">
              <Card>
                <CardHeader className="bg-transparent">
                  <h6>{user.username}</h6>
                </CardHeader>
                <CardImg top src={user.profileImage} alt={`Photo${user.id}`} />
                <CardFooter className="bg-transparent">
                  <h6>View Profile</h6>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default NewsFeed;
