import * as Redux from 'redux';
import * as $ from 'jquery';
import { ContextState } from '../components/Context';
import ActionTypes from '../ActionTypes';

export const contextActionCreator = {
  loadObjects: (tables, views) => {
    return {
      type: ActionTypes.LOAD_OBJECTS,
      tables,
      views,
    };
  },

  toggleContext: (): Redux.Action => {
    return {
      type: ActionTypes.TOGGLE_CONTEXT,
    };
  },
};

const initialState: ContextState = {
  visible: false,
  loaded: false,
  tables: [],
  views: [],
  tableVisible: false,
  viewVisible: false,
};

export const contextReducer = (state: ContextState = initialState, action): ContextState => {
  switch (action.type) {
    case ActionTypes.LOAD_OBJECTS:
      return Object.assign({}, state, {
        tables: action.tables,
        views: action.views,
        load: true,
      });
    case ActionTypes.TOGGLE_CONTEXT:
      return Object.assign({}, state, {
        display: !state.visible,
      });
    default:
      return state;
  }
};
