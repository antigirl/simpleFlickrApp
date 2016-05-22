import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WalkingSkeleton extends Component {
  render() {
    return (
      <div>Hello, I'm a Walking Skeleton </div>
    );
  }
}

ReactDOM.render(<WalkingSkeleton />, document.getElementById('app'));
