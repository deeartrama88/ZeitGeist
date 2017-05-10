import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <div className="container">
                    <h2>footer</h2>
                </div>
            </footer>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Footer);
