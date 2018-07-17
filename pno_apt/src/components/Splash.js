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
                <h1>Welcome to the splash page!</h1>
            </div>
        )
    }
};
export default Splash;