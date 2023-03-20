import React from "react";
import axios from "axios";
const APIkey = "AIzaSyD86t16Cjnd-7P7LpeFxvB27B4uV8i5wLU";
const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        chart: 'mostPopular',
        key: APIkey
    }
})
export default request;