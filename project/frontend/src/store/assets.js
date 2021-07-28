import { csrfFetch } from "./csrf.js";

const GET_BODY = 'assets/getBody';
const GET_BODIES = 'assets/getBodies';

const getOneBody = (payload) => ({
    type: GET_BODY,
    payload,
});

const getAllBodies = (payload) => ({
    type: GET_BODIES,
    payload,
});

export const getBodies = () => async dispatch => {
    const response = await csrfFetch("/api/assets/bodies");
    const data = await response.json();
    dispatch(getAllBodies(data));
    return response;
};

export const getBody = (id) => async dispatch => {
    const response = await csrfFetch(`/api/assets/bodies/${id}`);
    const data = await response.json();
    dispatch(getOneBody(data));
    return response;
};

const initialState = { allBodies: [], currentBody: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BODIES:
        return {
            ...state,
            allBodies: action.payload
        }
    case GET_BODY:
        return {
            ...state,
            currentBody: action.payload
        }
    default:
      return state;
  }
}

export default reducer;
