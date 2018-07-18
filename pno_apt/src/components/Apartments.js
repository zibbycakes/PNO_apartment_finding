import React, {Component} from 'react';
import apt_info from '../apt_info.json';
import {Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Apartments extends Component
{
    constructor() 
    {
        super();
        this.apartments = apt_info.apartments;
        this.row_limit = 2;
        this.state = {
            formattedArray : []
        }
    }

    componentDidMount() 
    {
        this.formatDisplayFromJSON();
    }

    formatDisplayFromJSON() 
    {
        var tempColArray =  [];
        console.log(this.apartments);
        for(let a in this.apartments) {
            tempColArray.push(
                <Col key ={this.apartments[a].name}>
                    <Card>
                        <CardImg href={"apartment/"+this.apartments[a].id} top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardTitle><a href={"/apartment/" + this.apartments[a].id}>{this.apartments[a].name}</a></CardTitle>
                        <CardSubtitle>{this.apartments[a].location}</CardSubtitle>
                        <CardText>{this.apartments[a].rent}</CardText>
                    </Card>
                </Col>
            );
        }
        var tempRowArray = [];
        var countCol = 0;
        var numSplices = Math.ceil(tempColArray.length / this.row_limit);
        for(var i = 0; i < numSplices; i++)
        {
                tempRowArray.push(
                    <Row key={countCol++}>
                        {tempColArray.splice(0,this.row_limit)}
                    </Row> 
                );
                tempRowArray.push(<br />)
        }
        this.setState({formattedArray: tempRowArray});
    }
    render()
    {
        console.log(apt_info.apartments);
        /*return (
            <div>
                <p>Welcome to the apartments page</p>
                <a href="/apartment/1">Apartment 1</a>
            </div>
        );*/
        return (
            <div>
                <Container>
                    {this.state.formattedArray}
                </Container>
            </div>
        );
    }
};
export default Apartments;