import * as Redux from 'redux';
import * as $ from 'jquery';
import { ContextsState } from '../components/Contexts';
import ActionTypes from '../ActionTypes';

interface ContextsAction extends Redux.Action {
  contexts: string[];
}

export const contextsActionCreator = {
  loadContexts: (contexts: string[]) : ContextsAction => {
    return {
      type: ActionTypes.LOAD_CONTEXTS,
      contexts,
    };
  },
};

const initialState: ContextsState = {
  contexts: [],
};

export const contextsReducer = (state: ContextsState = initialState, action: ContextsAction): ContextsState => {
  switch (action.type) {
    case ActionTypes.LOAD_CONTEXTS:
      return ({
        contexts: action.contexts,
      });
    default:
      return state;
  }
};
