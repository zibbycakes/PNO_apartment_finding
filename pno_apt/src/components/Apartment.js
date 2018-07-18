import React, {Component} from 'react';

class Apartment extends Component
{
    constructor(props) 
    {
        super();
        this.id = props.match.params.number;
        console.log(this.id);
    }
    
    componentDidMount()
    {
        console.log(this.id);
    }

    render()
    {
        return (
            <div>
                This is Apartment {this.id}
            </div>
        );
    }
};
export default Apartment;