import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar
          color="transparent"
          className="border-bottom"
          light
          expand="md"
          fixed="top"
        >
          <NavbarBrand className="alt-font">Instagram</NavbarBrand>
          <NavbarToggler onClick={() => this.handleDropdown()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">News Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Components</NavLink>
              </NavItem>
              {this.props.currentUser ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i class="far fa-user-circle" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>View Profile</DropdownItem>
                    <DropdownItem>View Settings</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavItem>
                  <NavLink href="/">Sign In</NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
