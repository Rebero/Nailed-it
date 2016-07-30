import { ROOM_SELECTED } from '../actions/rooms.action';

const roomSelectedReducer = (state = null, action) => {
  switch (action.type) {
    case ROOM_SELECTED:
      return action.room;
    default:
      return state;
  }
};

export default roomSelectedReducer;
