import React from 'react';
import Gobbet from './index.es6';
import ImageCaption from '@economist/component-imagecaption';

const customSharebarFlip = {
  useSvg: true,
  fxDirection: 'flip-to-top',
  fxType: 'cube',
  layout: 'horizontal',
  background: '#333333',
  fxDefaultStateBackground: '#999999',
};

const customSharebar = {
  useSvg: true,
  layout: 'horizontal',
  icon: {
    color: '#FFFFFF',
  },
  icons: [
    {
      href: 'http://www.facebook.com/sharer/sharer.php?u=http://www.google.com',
      title: 'Share on Facebook',
      className: 'fb',
      icon: 'facebook',
      s: {
        events: 'event76',
      },
    },
    {
      href: 'https://twitter.com/intent/tweet?url=http://www.ubmedia.com',
      title: 'Share on Twitter',
      className: 'twitter',
      icon: 'twitter',
      s: {
        events: 'event31',
      },
    },
  ],
};
export default (
  <div>
    <Gobbet title="Default Gobbet" showShareBar={true} sharebar={customSharebarFlip}>
      <ImageCaption caption="This is a default Gobbet"
      src="http://lorempixel.com/g/300/169/food"
      textposition="top" />
    </Gobbet>
    <Gobbet showShareBar={true} sharebar={customSharebar}>
      <ImageCaption caption="This is a Gobbet with a customised sharebar"
      src="http://lorempixel.com/g/300/169/food"
      textposition="top" />
    </Gobbet>
  </div>
);
