import * as React from 'react';
import * as ReactRedux from 'react-redux';

export default class SQLToolbar extends React.Component {

  execute() :void {
    
  }

  render() {
    console.log('SQLToolbar');
    return (
      <div>
        <input type="button" onClick={this.execute} />
      </div>
    );
  }
}
