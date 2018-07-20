import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem, Container, Row, Col, Table} from 'reactstrap';
import apt_info from '../apt_info.json';

class Apartment extends Component
{
    constructor(props) 
    {
        super();
        this.id = props.match.params.number;
        console.log(this.id);
        console.log(apt_info.apartments[this.id]);
        this.info = apt_info.apartments[this.id];
        this.state = {
            floorplanArray: []
        }
    }

    formatFloorplanArray()
    {
        var tempArray = [];
        var tempid = 1;
        console.log(this.info.floorplans);
        for(let fp of this.info.floorplans)
        {
            console.log(fp);
            tempArray.push(
                <tr>
                    <th scope="row">{tempid++}</th>
                    <td>{<img src={fp.image}></img>}</td>
                    <td>{fp.name}</td>
                    <td>{fp.rent}</td>
                </tr>
            );
        }
        this.setState({floorplanArray: tempArray});
    }

    getEventInfoFromAppt()
    {
        var event = apt_info.events[this.info.appt];
        return <text><i>{event.date}</i> at <i>{event.location}</i>.</text>;
    }
    
    componentDidMount()
    {
        console.log(this.id);
        this.formatFloorplanArray();
    }

    render()
    {
        return (
            <div>
                <Button style={{marginTop:"50px", marginBottom:"50px"}} color="primary" href="/apartments">← Back to Apartments</Button>
                <h1 style={{textAlign:'center'}}>{this.info.name}</h1>
                <br />
                <Container style={{maxWidth:"1500px"}}>
                    <Row>
                        <Col>
                            <img src={this.info.gridImageLoc} height="478px" width="100%"/>
                        </Col>
                        <Col style={{paddingTop:'135px'}}>
                            <br />
                            <h3 style={{textAlign:'center'}}>Contact Info</h3>
                            <ListGroup>
                                <ListGroupItem><strong>Address:</strong> <a target="_blank" href={"https://www.google.com/maps/place/"+this.info.location}>{this.info.location}</a></ListGroupItem>
                                <ListGroupItem><strong>Phone #:</strong> {this.info.contactNumber}</ListGroupItem>
                                <ListGroupItem><strong>Website:</strong> <a href={this.info.website}>{this.info.website}</a></ListGroupItem>
                                <ListGroupItem><strong>Appointment Scheduled?</strong> {this.info.appt == null ? "No" : this.getEventInfoFromAppt()}</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <h3 style={{textAlign:'center'}}>Floorplans</h3>
                        <br />
                        <Table hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Rent</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.floorplanArray}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        );
    }
};
export default Apartment;