import Action from "../action_ID/action_ID.js";

const LeftMenuOpen = () =>{
  return{
    type: Action.SHOW_LEFT_MENU
  };
};

export default {LeftMenuOpen};