import * as React from 'react';

interface ColumnProps {
  contextName: string;
  tableName: string;
  name: string;
}

export default class Column extends React.Component<ColumnProps, {}> {

  constructor(props: ColumnProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <li>
        <span>{this.props.name}</span>
      </li>
    );
  }
}
