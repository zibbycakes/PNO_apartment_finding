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
                <br />
                <br />
                <p style={{textAlign:'center'}}>
                    Click on Apartments to check out the apartments I've researched. Right now the other links at the top don't work.
                </p>
                <br />
                <p style={{textAlign:'center'}}>
                    There isn't really much else to do on this page, so just go ahead and click Apartments up at the top.
                </p>
            </div>
        )
    }
};
export default Splash;