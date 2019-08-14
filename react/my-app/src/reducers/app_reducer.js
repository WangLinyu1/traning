import Action from "../actions/action_ID/action_ID.js";

const initState = {
  leftOpen : true,
}

const appReducer = (state = initState, action) =>{
  if(action.type === Action.SHOW_LEFT_MENU)
  {
    return{
      ...state,
      leftOpen: !state.leftOpen
    }
  }
  return state;
}

export default appReducer;