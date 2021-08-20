import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID YOCE_AD2iIkFdu561D1AqyX6026GoRxOIDBvWzs7dAE'
    }
});