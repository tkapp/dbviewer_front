import * as React from 'react';

import Contexts from './Contexts';
import WorkView from './WorkView';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div id="side_bar"><Contexts /></div>
        <div id="work_view"><WorkView /></div>
      </div>
    );
  }
}