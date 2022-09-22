import axiosClient from './axiosClient';

const animeApi = {
    getTop(params) {
        const url = 'top/anime';
        return axiosClient.get(url, { params });
    },
    getAllGenres() {
        const url = 'genres/anime';
        return axiosClient.get(url);
    },
};

export default animeApi;
