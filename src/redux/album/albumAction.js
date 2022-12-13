import axios from 'axios'
import { FETCH_ALBUM_ERROR, FETCH_ALBUM_LOADING, FETCH_ALBUM_SUCCESS } from "./albumActionTypes";

function fetchLoading(isLoading){
    return {
        type:FETCH_ALBUM_LOADING,
        payload:isLoading
    }
}
function fetchSuccess(data){
    return {
        type:FETCH_ALBUM_SUCCESS,
        payload:data
    }
}
function fetchError(error){
    return {
        type:FETCH_ALBUM_ERROR,
        payload:error
    }
}

export function fetchAlbums(){
    return async function (dispatch,getState){
        dispatch(fetchLoading(true))
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/albums");
            dispatch(fetchSuccess(result.data));
        } catch (error) {
            dispatch(fetchError(error));
        }
        dispatch(fetchLoading(false));
      
    }
}