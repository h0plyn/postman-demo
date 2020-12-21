const GET_PUPPIES = 'GET_PUPPIES';

export const getPuppies = (dogs) => ({ type: GET_PUPPIES, puppies });

export default function puppiesReducer(state = {}, action) {
  switch (action.type) {
    case GET_PUPPIES:
      return action.puppies;
  }
}
