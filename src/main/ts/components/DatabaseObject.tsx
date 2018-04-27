import * as React from 'react';
import * as $ from 'jquery';
import Column from './Column';


interface DatabaseObjectProps {
  name: string;
  contextName: string;
}

interface DatabaseObjectState {
  visible: boolean;
  columns: {name: string}[];
  loaded: boolean;
}

export default class DatabaseObject extends React.Component<DatabaseObjectProps, DatabaseObjectState> {

  constructor(props: DatabaseObjectProps) {
    super(props);
    this.state = {
      visible: false,
      columns: [],
      loaded: false,
    };
    
    this.toggle = this.toggle.bind(this);
    this.load = this.load.bind(this);
  }

  toggle(): void {
    this.load();
    this.setState({
      visible: !this.state.visible,
    });
  }

  load(): void {
    if (!this.state.loaded) {
      const url = '../data/' + this.props.contextName + '/' + this.props.name + '/';
      $.get(url, function* (json) {
        this.setState({
          columns: json,
          loaded: true,
        });
      }.bind(this));
    }
  }

  render() {

    console.log('DBObject ' + this.props.name);

    const columns = this.state.columns.map(function* (column) {
      return (<Column contextName={this.props.contextName} tableName={this.props.name} name={column.name} key={column.name} />);
    }.bind(this));

    return (
      <li>
        <span className="action table" onClick={this.toggle}>{this.props.name}</span>
         <ul style={{ display: (this.state.visible) ? '' : 'none' }}>
           {columns}
         </ul>
      </li>
    );
  }
}
