import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReactTable from 'react-table';
import * as $ from 'jquery';

// import SQLEditor from './SQLEditor';
// import SQLResult from './SQLResult';

interface Props {
  contexts?: string[];
}
  
export interface WorkViewState {
  sql: string;
  context: string;
  result: any;
}

class WorkView extends React.Component<Props, WorkViewState> {

  constructor(props: Props) {
    super(props);
    this.state = {
      sql: "",
      context: "",
      result: {
        columns: [],
        data: [],
      }
    };

    this.execute = this.execute.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeContext = this.changeContext.bind(this);
  }

  changeText(event) : void {
    this.setState({sql: event.target.value});
  }

  changeContext(event) : void {
    this.setState({context: event.target.value});
  }

  execute() : void {
    // TODO validation
    console.log(this.state.context);
    $.ajax({
      method: 'POST',
      url: '../data/' + this.state.context + '/execute', 
      data: {
        sql: this.state.sql,
      },
    }).done((json) => {
      console.log(json);
      this.setState({

      });
    }).fail((jqXHR) => {
      console.log(jqXHR.responseText);
    });
  }

  render() {
    console.log('WorkView');

    const contexts = this.props.contexts.map((contextName: string) => {
      return <option value={contextName} key={contextName}>{contextName}</option>;
    });

    return (
      <div id="work_view">
        <form id="">
          <div className="sql_editor">
            <textarea onChange={this.changeText} />
            <div>
              <select onChange={this.changeContext}>
                {contexts}
              </select>
              <input type="button" value="execute" onClick={this.execute} />
            </div>
          </div>
        </form>
        <ReactTable
          data={this.state.result.data}
          colmuns={this.state.result.columns}
        />
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
  };
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(WorkView);