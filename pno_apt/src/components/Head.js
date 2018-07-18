import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

class Head extends Component
{
    render()
    {
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">PNO Apartment Project</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/apartments">Apartments</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Hotels/AirBNBs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Possible Expenses</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
};
export default Head;