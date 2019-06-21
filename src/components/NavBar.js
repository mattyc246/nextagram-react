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
    const { currentUser, handleLogout } = this.props;
    return (
      <div>
        <Navbar
          className="border-bottom"
          light
          expand="md"
          fixed="top"
          style={styles.navBar}
        >
          <NavbarBrand className="alt-font">Instagram</NavbarBrand>
          <NavbarToggler onClick={() => this.handleDropdown()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {currentUser ? (
                <>
                  <NavItem>
                    <NavLink href="/">News Feed</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Components</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <i className="far fa-user-circle" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>View Profile</DropdownItem>
                      <DropdownItem>View Settings</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
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

const styles = {
  navBar: {
    backgroundColor: "rgba(255,255,255,0.5)"
  }
};
export default NavBar;
