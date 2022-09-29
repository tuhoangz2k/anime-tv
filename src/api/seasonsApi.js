import axiosClient from './axiosClient';

const animeApi = {
    getSeasonList(params) {
        const url = 'seasons';
        return axiosClient.get(url, { params });
    },
    getCommingSoon(params) {
        const url = 'seasons/upcoming';
        return axiosClient.get(url, { params });
    },
    getSeason({ year, season }, params) {
        const url = `seasons/${year}/${season}`;
        return axiosClient.get(url, { params });
    },
    getSeasonNow(params) {
        const url = 'seasons/now';
        return axiosClient.get(url, { params });
    },
};

export default animeApi;
