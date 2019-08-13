import Data from "./data.js";
import Action from "../actions/action_ID/action_ID.js";

const initState = {
  data : Data.navItems,
  value: 0,
  event: null
}
const navReducer = (state = initState, action) =>{
    if(action.type === Action.SHOW_SUBLIST)
    {
        return{
          ...state,
          [action.oneState]:  !state[action.oneState]
        }
  
    }
    else if(action.type === Action.SET_STATE)
    {
      if(action.bool && state[action.oneState] === undefined)
      {
        return{
          ...state,
          [action.oneState]:  action.bool
        }
      }
    }
    else if(action.type === Action.SWITCH_TABS)
    {
      return{
        ...state,
        value: action.value,
        event: action.event
      }
    }
    else if(action.type === Action.RESET_TABS_VALUE)
    {
      return{
        ...state,
        value: 0
      }
    }
    return state;
  }
  
  export default navReducer;