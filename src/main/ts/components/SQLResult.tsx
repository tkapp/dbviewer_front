import * as React from 'react';

interface SQLResultProps {
  value: string;
}

interface SQLResultState {
}

export default class SQLResult extends React.Component<SQLResultProps, SQLResultState> {
  
  constructor(props: SQLResultProps) {
    super(props);
  }

  render() {
    return (
      <span>SQLResult</span>
    );
  }
}
