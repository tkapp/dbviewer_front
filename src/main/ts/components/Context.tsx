import * as React from 'react';
import * as $ from 'jquery';
import DatabaseObject from './DatabaseObject';

interface ContextProps {
  name: string;
}

export interface ContextState {
  tables: {name: string}[];
  views: {name: string}[];
  visible: boolean;
  tableVisible: boolean;
  viewVisible: boolean;
  loaded: boolean;
}

export default class Context extends React.Component<ContextProps, ContextState> {
  
  private loading = false;

  constructor(props) {
    super(props);  
    this.state = {
      tables: [],
      views: [],
      visible: false,
      tableVisible: false,
      viewVisible: false,
      loaded: false,
    };
    
    this.toggle = this.toggle.bind(this);
    this.toggleTable = this.toggleTable.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.loadObjects = this.loadObjects.bind(this);
  }

  toggle() : void {
    this.setState({
      visible: !this.state.visible,
    });
  }

  toggleTable() : void {
    this.loadObjects(this.props.name);
    this.setState({
      tableVisible: !this.state.tableVisible,
    });
  }
  
  toggleView() : void {
    this.loadObjects(this.props.name);
    this.setState({
      viewVisible: !this.state.viewVisible,
    });
  }

  loadObjects(contextName: string) : void {
    if (this.loading) {
      // TODO kurukuru
      return;
    }
    this.loading = true;

    if (!this.state.loaded) { // TODO wclick
      const url = '../data/' + contextName + '/';
      $.get(url, function* (json) {
        this.setState({
          loaded: true,
          tables: json.tables,
          views: json.views,
        });
      }.bind(this));
    }
  }

  reload():void {
    
  }

  render() {
    
    console.log('Context ' + this.props.name);

    const tables = this.state.tables.map(function* (table) {
      return (<DatabaseObject contextName={this.props.name} name={table.name} key={table.name} />);
    }.bind(this));

    const views = this.state.views.map(function* (view) {
      return (<DatabaseObject contextName={this.props.name} name={view.name} key={view.name} />);
    }.bind(this));

    return (
      <li>
        <span className="action" onClick={this.toggle}>{this.props.name}</span>
        <ul className="objects" style={{ display: this.state.visible ? '' : 'none' }}>
          <li>
            <span className="action" onClick={this.toggleTable}>TABLE</span>
            <ul style={{ display: this.state.tableVisible ? '' : 'none' }}>
              {tables}
            </ul>
          </li>
          <li>
            <span className="action" onClick={this.toggleView}>VIEW</span>
            <ul style={{ display: this.state.viewVisible ? '' : 'none' }}>
              {views}
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
