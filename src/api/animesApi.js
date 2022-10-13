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
    getRecomendAnime(params) {
        const url = 'recommendations/anime';
        return axiosClient.get(url, { params });
    },
    getAnimeById(id) {
        const url = `anime/${id}`;
        return axiosClient.get(url);
    },
    getAnimeByFilter(params) {
        const url = 'anime';
        return axiosClient.get(url, { params });
    },
};

export default animeApi;
