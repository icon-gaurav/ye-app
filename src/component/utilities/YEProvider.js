/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';

const YEContext = React.createContext();

class YEProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <YEContext.Provider
                value={{}}>
                {this.props.children}
            </YEContext.Provider>
        );
    }
}

export default YEProvider;