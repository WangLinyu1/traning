import Action from "../action_ID/action_ID.js";

const ShowSublist = (oneState) =>{
  return{
    type: Action.SHOW_SUBLIST,
    oneState: oneState
  };
};

const SetState = (oneState,bool) =>{
  return{
    type: Action.SET_STATE,
    oneState: oneState,
    bool: bool
  };
};


export default {ShowSublist, SetState};