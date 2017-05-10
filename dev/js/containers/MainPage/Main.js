import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewsSlider2 from '../NewsPage/NewsSlider';

class Main extends React.Component{

    render() {
        return (
            <div className="container_full">
                <div className="container">
                    <div className="new_carousel">
                        <NewsSlider2 />
                    </div>
                </div>
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

export default connect(mapStateToProps, mathDispatchToProps)(Main);
