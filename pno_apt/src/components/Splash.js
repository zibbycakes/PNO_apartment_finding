import React, {Component} from 'react';

class Splash extends Component
{
    componentDidMount() {
        document.title = "PNO Apartments";
    }
    render()
    {
        return(
            <div>
                <br/>
                <br/>
                <h1 style={{textAlign:'center'}}>Welcome to the splash page!</h1>
            </div>
        )
    }
};
export default Splash;