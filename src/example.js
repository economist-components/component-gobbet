import 'babel-polyfill';
import React from 'react';
import Gobbet from './';
import ImageCaption from '@economist/component-imagecaption';

const title = (
  <span>
    <span className="gobbet__title gobbet__title--left">World</span>
    <span className="gobbet__title gobbet__title--right">If</span>
  </span>
);
export default (
  <Gobbet title={title}>
    <ImageCaption
      className="gobbet__figure"
      sources={[
        { url: '/assets/example.svg', mime: 'image/svg+xml' },
      ]}
      alt=""
    />
  </Gobbet>
);
