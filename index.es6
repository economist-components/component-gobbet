import React from 'react';
import ShareBar from '@economist/component-sharebar';

export default class Gobbet extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.node,
      children: React.PropTypes.element,
      showShareBar: React.PropTypes.bool,
      sharebar: React.PropTypes.object,
    };
  }

  render() {
    return (
      <div className="Gobbet--container touch">
        <header className="Gobbet--header">
          {this.props.title ? <h1 className="Gobbet--header-title">{this.props.title}</h1> : null }
          <div className="Gobbet--header-aside">
            {this.props.showShareBar === true ? <ShareBar {...this.props.sharebar} /> : null }
          </div>
        </header>
        <div className="Gobbet--conatiner-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
