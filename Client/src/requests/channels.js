import axios from "axios";
import {apiUrl} from "../config/api";

export const getChannels = () => {
    return axios.get(`${apiUrl}/channels`)
            .then((response) => {
                return response.data;
            });
};

export const selectChannel = (id) => {
    return axios.patch(`${apiUrl}/channels/select/${id}`)
        .then((response) => {
            return response.data;
        });
};

export const publish = (post) => {
    return axios.post(`${apiUrl}/post/store`, {
        post
    })
    .then((response) => {
        return response.data;
    });
};

export const postNow = (postId) => {
    return axios.post(`${apiUrl}/post/${postId}`)
    .then((response) => {
        return response.data;
    });
};

export const destroyPost = (postId) => {
    return axios.delete(`${apiUrl}/post/${postId}`)
    .then((response) => {
        return response.data;
    });
};

export const scheduledPosts = () => {
    return axios.get(`${apiUrl}/scheduled/posts`)
    .then((response) => {
        return response.data;
    });
};

export const pastScheduled = () => {
    return axios.get(`${apiUrl}/scheduled/past`)
    .then((response) => {
        return response.data;
    });
};

export const destroyChannel = (channelId) => {
    return axios.delete(`${apiUrl}/channels/delete/${channelId}`)
    .then((response) => {
        return response.data;
    });
}