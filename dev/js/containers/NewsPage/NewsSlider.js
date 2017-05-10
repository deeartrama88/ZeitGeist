import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {v4} from 'node-uuid'
import {loadCarouselNews} from '../../actions/loadCarouselNews'
import Slider from 'react-slick';

class NewsSlider extends React.Component{
    componentWillMount(){
        this.props.loadCarouselNews();
    }
    render() {
        let list = this.props.newsCarousel.map(item => {
            return (
                <article key={ v4() }>
                    <div className="wrap">
                        <div className="title"> { item.title } </div>
                        <div className="content">
                            { item.body }
                        </div>
                    </div>
                </article>
            )
        });
        let settings = {
            dots: true,
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2,  arrows: false, } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ]
        };
        return (
            <div className="carousel">
                <div className="new_carousel">
                    <Slider {...settings}>
                        {list}
                    </Slider>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newsCarousel: state.newsCarousel
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        loadCarouselNews
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(NewsSlider);
