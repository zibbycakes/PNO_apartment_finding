import React, {Component} from 'react';
import apt_info from '../apt_info.json';
import {Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Apartments extends Component
{
    constructor() 
    {
        super();
        this.apartments = apt_info.apartments;
        this.row_limit = 2;
        this.state = {
            formattedArray : [],
            formattedMapURL: ""
        }
    }

    componentDidMount() 
    {
        document.title = "Apartments";
        this.formatDisplayFromJSON();
        this.formatMapSourceURL();
    }

    formatMapSourceURL() 
    {
        var tempURL = "https://maps.googleapis.com/maps/api/staticmap?center=8058%20Dominion%20Pkwy,%20Plano,%20TX%2075024&zoom=13&size=800x400&maptype=roadmap&key=AIzaSyByNJOSX4S3ez2NM_g9na2hstoUCCP-0a4&markers=color:red%7Clabel:C%7C8058%20Dominion%20Pkwy,%20Plano,%20TX%2075024";
        var tempseg = "";
        for(let apt in this.apartments)
        {
            var a = this.apartments[apt];
            //something something location. example:
            //&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            //&markers=color:red%7Clabel:C%7C40.718217,-73.998284
            tempseg="&markers=color:"+a.mapcolor+"%7Clabel:"+a.maplabel+"%7C"+a.location;
            tempURL+=tempseg;
        }
        this.setState({formattedMapURL:tempURL});
    }

    formatDisplayFromJSON() 
    {
        var colorLibrary =
        {
            purple: "#8c71a3",
            orange: "#d08931",
            blue: "#86acf6",
            brown: "#917750"
        }
        var tempColArray =  [];
        console.log(this.apartments);
        for(let a in this.apartments) {
            tempColArray.push(
                <Col key ={this.apartments[a].name}>
                    <Card>
                        <CardBody style={{height:'20px',background:colorLibrary[this.apartments[a].mapcolor]}}>
                            <br />
                        </CardBody>
                        <CardImg top height="337px" width="100%" src={this.apartments[a].gridImageLoc} alt="Card image cap" />
                        <CardTitle><a href={"/apartment/" + this.apartments[a].id}>{this.apartments[a].name}</a> <Button style={{float:'right'}} outline color='danger' size="sm" target="_blank" href={"https://www.google.com/maps/place/"+this.apartments[a].location}><img width="24" height="24" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" /></Button></CardTitle>
                        <CardSubtitle>{this.apartments[a].location}</CardSubtitle>
                        <br />
                        <CardText>{this.apartments[a].lowestRent}</CardText>
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
                <h1 style={{textAlign:'center'}}>Apartments</h1>
                <br />
                <Container>
                    {this.state.formattedArray}
                </Container>
                <p align="center">
                    <img src={this.state.formattedMapURL} /> 
                </p>  
            </div>
        );
    }
};
export default Apartments;