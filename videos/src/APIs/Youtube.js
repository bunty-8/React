import axios from 'axios';

const KEY = 'AIzaSyBsW94YaIIyuhwSYwuXfMrjdKejAyquP58';

export default  axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY,
        type : 'video'
    }
});