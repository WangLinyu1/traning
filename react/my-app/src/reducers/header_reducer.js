import Data from "./data.js";
import Action from "../actions/action_ID/action_ID.js";

const initState = {
  expand:false,
  anchorEl : null,
  rightContent: Data.rightMenu,
  navItems: Data.navItems
  
}
console.log(initState.navItems)

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
  else if(action.type === Action.SHOW_SUBLIST){
    return {
      ...state,
      expand:true
    }
  }
  else if(action.type === Action.CLOSE_SUBLIST){
    return {
      ...state,
      expand:false
    }
  }
  return state;
}

export default headerReducer;