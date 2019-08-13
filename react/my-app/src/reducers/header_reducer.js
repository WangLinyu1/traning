import Data from "./data.js";
import Action from "../actions/action_ID/action_ID.js";

const initState = {
  anchorEl : null,
  rightContent: Data.rightMenu
}

const headerReducer = (state = initState, action) => {
  if(action.type === Action.SHOW_RIGHT_MENU)
  {
    return{
      ...state,
      anchorEl: action.event.currentTarget
    }
  }
  else if(action.type === Action.CLOSE_RIGHT_MENU)
  {
    return{
      ...state,
      anchorEl: null
    }
  }
  return state;
}

export default headerReducer;