import React from 'react';

export default function Gobbet({
  title,
  children,
}) {
  let titleEl = null;
  if (title) {
    titleEl = <h1 className="gobbet__header-title">{title}</h1>;
  }

  return (
    <div className="gobbet">
      <header className="gobbet__header">
        {titleEl}
      </header>
      <div className="gobbet__body">
        {children}
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Gobbet.propTypes = {
    title: React.PropTypes.node,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element,
    ]),
  };
}
