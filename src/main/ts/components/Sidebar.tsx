import * as React from 'react';
import Contexts from './Contexts';

interface Props {
}

export interface SidebarState {
}

class Sidebar extends React.Component<Props, SidebarState> {

  render() {
    return (
      <div id="side_bar">
        <Contexts />
      </div>
    );
  }
}

export default Sidebar;
