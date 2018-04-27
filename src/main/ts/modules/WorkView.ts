import * as Redux from 'redux';
import { WorkViewState } from '../components/WorkView';

enum ActionTypes {
  INITIALIZE,
}

export const workViewDispatcher = {
  show: (dispatch, name: string) : void => {
    return dispatch({
      type: ActionTypes.INITIALIZE,
      name,
    });
  },
};

const initialState: WorkViewState = {
  sql: "",
  context: "",
  result: {
    data: [],
    columns: [],
  }
};

export function workViewReducer(state: WorkViewState = initialState, action: Redux.Action): WorkViewState {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}
