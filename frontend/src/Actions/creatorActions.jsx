/*
import { CREATOR_LIST_FAIL, CREATOR_LIST_REQUEST, CREATOR_LIST_SUCCESS } from "../Constants.jsx/creatorConstants";
const listCreators = () => async(dispatch) => {
    try {
        dispatch({type: CREATOR_LIST_REQUEST})
        const {data} = await axios.get('/api/creator/')
        dispatch({ 
            type: CREATOR_LIST_SUCCESS, 
            payload: data
        });

        
    }  catch(error){
        dispatch({
            type: CREATOR_LIST_FAIL, 
            payload: 
            error.response
            && error.response.data.message 
            ? error.response.data.message : error.message
        });
    }
};
*/