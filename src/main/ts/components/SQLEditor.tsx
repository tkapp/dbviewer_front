import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as $ from 'jquery';

interface Props {
  contexts?: string[];
}

interface SQLEditorState {
  sql: string;
  context: string;
}

class SQLEditor extends React.Component<Props, SQLEditorState> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      sql: "",
      context: "",
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
    }).fail((jqXHR) => {
      console.log(jqXHR.responseText);
    });
  }

  render() {

    console.log("SQLEditor");

    const contexts = this.props.contexts.map((contextName: string) => {
      return <option value={contextName} key={contextName}>{contextName}</option>;
    });

    return (
      <div className="sql_editor">
        <textarea onChange={this.changeText} />
        <div>
          <select onChange={this.changeContext}>
            {contexts}
          </select>
          <input type="button" value="execute" onClick={this.execute} />
        </div>
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

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SQLEditor);