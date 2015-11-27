import React from 'react';

export default class Gobbet extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.node,
      children: React.PropTypes.element,
    };
  }

  render() {
    return (
      <div className="Gobbet--container touch">
        <header className="Gobbet--header">
          {this.props.title ? <h1 className="Gobbet--header-title">{this.props.title}</h1> : null }
          <div className="Gobbet--header-aside">
          </div>
        </header>
        <div className="Gobbet--conatiner-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
