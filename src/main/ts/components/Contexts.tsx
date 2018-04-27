import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as $ from 'jquery';

import { contextsActionCreator } from '../modules/Contexts';
import Context from './Context';

interface Props {
  load?: (contexts: string[]) => void;
  contexts?: string[];
}

export interface ContextsState {
  contexts: string[];
}


class Contexts extends React.Component<Props> {

  constructor(props: Props) {
    super(props);

    this.reload = this.reload.bind(this);
    this.load = this.load.bind(this);
  }

  componentDidMount(): void {
    this.load();
  }

  load(): void {
    $.get('../data/', function (json: string[]) {
      this.props.load(json);
    }.bind(this));
  }

  reload(): void {
    this.load();
  }

  showNew() : void {
    console.log("abc");
  }

  render() {
    console.log('Contexts');
    const contexts: JSX.Element[] = this.props.contexts.map((contextName: string) => {
      return <Context name={contextName} key={contextName} />;
    });

    return (
      <div id="tree">
        <h2>設定一覧</h2>
        <button onClick={this.reload}>再読込</button>
        <button onClick={this.showNew}>新規</button>
        <ul>
          {contexts}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props: Props): Props => {
  return {
    contexts: state.contextsReducer.contexts
  };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.Action>): Props => {
  return {
    load: (contexts: string[]) => dispatch(contextsActionCreator.loadContexts(contexts)),
  };
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Contexts);