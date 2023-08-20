import API from "../API/API"

const SET_INIT='SET_INIT'
const SET_TABLE='SET_TABLE'
const SET_USER='SET_USER'

let initialState = {
  table:[
    {
    id:null,
  name:null,
  email:null,
  tLog:null,
  tReg:null,
  status:null
  }
],
auth:{
  name:null,
  password:null,
  status:'Blocked',
},
}
const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE:debugger;return{...state,table:[...action.state.data]};
    case SET_USER:debugger;return{...state,auth:action.auth};
    case SET_INIT:return(state=initialState);
    default:return { ...state };
  }
};
export const tableAC=(state)=>{{return{type:SET_TABLE,state}}}
export const initAC=()=>{{return{type:SET_INIT}}}
export const userAC=(auth)=>{{return {type:SET_USER,auth}}}
export const clearAC=()=>{{return {type:SET_USER}}}
export const getDataTC=()=>{
  return async(dispatch)=>{
   let DB=await API.getDB()
   dispatch(tableAC(DB))
  }
}
export const getLogTC=(data)=>{
  return async (dispatch)=>{
    let Log=await API.getLog(data);
    dispatch(tableAC(Log))
  }
}

export const getBlockTC=(data)=>{
  return async (dispatch)=>{
    let Block=await API.getBlock(data);
    debugger;
    dispatch(tableAC(Block))
  }
}
export const getUnblockTC=(data)=>{
  return async (dispatch)=>{
    let Unblock=await API.getUnBlock(data);
    debugger;
    dispatch(tableAC(Unblock))
  }
}

export const getDeleteTC=(data)=>{
  return async (dispatch)=>{
    debugger;
    let Delete=await API.getDelete(data);
    debugger;
    dispatch(tableAC(Delete))
  }
}

export const getRegistrationTC=(data)=>{
  debugger;
  return async (dispatch)=>{
    let Registration=await API.getRegistration(data);
    debugger;
    dispatch(tableAC(Registration))
  }
}
export default TableReducer;
