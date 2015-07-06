import React from 'react';
import ShareBar from '@economist/component-sharebar';

export default class Gobbet extends React.Component {

  render() {
    return (
      <div className="gobbet">
        {this.props.title ? <h1>{this.props.title}</h1> : null }
        {this.props.children}
        {this.props.showShareBar === true ? <ShareBar {...this.props.sharebar}></ShareBar> : null }
      </div>
    );
  }
}