import ACTION_CONSTANTS from "../actions/actionConstants";

const initialState = {
  formList: [],
  formUploadFormList:[],
  formUploadCounter:0
};

const formCheckList= (state = initialState, action)=> {
  switch (action.type) {
    case ACTION_CONSTANTS.FORM_CHECK_LIST_UPDATE:
      return {...state, formList: action.payload };
    case ACTION_CONSTANTS.FORM_UPLOAD_LIST:
      return {...state, formUploadFormList: action.payload, formUploadCounter:0 };
    case ACTION_CONSTANTS.FORM_UPLOAD_COUNTER:
      return {...state, formUploadCounter: state.formUploadCounter+1 };
    default:
      return state;
  }
}

export default formCheckList;
