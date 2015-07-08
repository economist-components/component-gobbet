import React from 'react';
import ShareBar from '@economist/component-sharebar';

export default class Gobbet extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      children: React.PropTypes.string,
      showShareBar: React.PropTypes.string,
      sharebar: React.PropTypes.string,
    };
  }

  render() {
    return (
      <div className="gobbet">
        {this.props.title ? <h1>{this.props.title}</h1> : null }
        {this.props.children}
        {this.props.showShareBar === true ? <ShareBar {...this.props.sharebar} /> : null }
      </div>
    );
  }
}
