import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from './Header';
import Footer from './Footer';

require('../../scss/style.scss');
require('../../scss/media.scss');

class MainWrap extends React.Component{
    render() {
        return (
            <div className="main_wrap">
                <Header />
                    {this.props.children}
                <Footer />
            </div>
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

export default connect(mapStateToProps, mathDispatchToProps)(MainWrap);
