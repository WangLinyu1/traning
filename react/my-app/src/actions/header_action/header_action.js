import Action from "../action_ID/action_ID.js";

const ShowRightMenu = (event) =>{
  return{
    type: Action.SHOW_RIGHT_MENU,
    event: event
  };
};

const CloseRightMenu = () => {
  return{
    type: Action.CLOSE_RIGHT_MENU,
  };
};

const ShowSubList = (event) =>{
  return{
    type:Action.SHOW_SUBLIST,
  };
}

const CloseSubList = () =>{
  return{
    type:Action.CLOSE_SUBLIST,
  };
}

export default {ShowRightMenu, CloseRightMenu,ShowSubList,CloseSubList};