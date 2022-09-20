import axiosClient from "./axiosClient";

const animeApi={

    getTop(params){
        const url = 'top/anime'
        return axiosClient.get(url,{params})
    }
}

export default animeApi