import axios from 'axios'
import {LOAD_CAROUSEL_NEWS, baseUrl} from './constants'


export function loadCarouselNews (data) {
    return function (dispatch) {
        axios({
            url: baseUrl + "/posts/",
            method: "get"
        }).then((response)=>{
            // in response we have 100 posts, it's too much for carousel, we will take first 6
            let newsForCarousel = (response.data.length > 5) ? response.data.slice(0, 5) : response.data;
            dispatch({ type: LOAD_CAROUSEL_NEWS, payload: newsForCarousel });
        }).catch(error => {
            console.log(error);
        })
    }
}