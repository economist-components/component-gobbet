import ImageCaption from '@economist/component-imagecaption';
import React from 'react';
import Gobbet from './index';
import Icon from '@economist/component-icon';

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
      type: 'facebook',
      s: {
        events: 'event76',
      },
    },
    {
      href: 'https://twitter.com/intent/tweet?url=http://www.ubmedia.com',
      title: 'Share on Twitter',
      className: 'twitter',
      type: 'twitter',
      s: {
        events: 'event31',
      },
    },
  ],
};
export default (
  <div>
    <Gobbet title="Default Gobbet" showShareBar={true}>
      <ImageCaption caption="This is a default Gobbet"
      src="http://lorempixel.com/g/300/169/food"
      textposition="top" />
    </Gobbet>
    <Gobbet title="Just a title">
      This is a different Gobbet with no sharedBar
    </Gobbet>
    <Gobbet className="gobbet" showShareBar={true} sharebar={customSharebar}>
      <ImageCaption caption="This is a Gobbet with a customised sharebar"
      src="http://lorempixel.com/g/300/169/food"
      textposition="top" />
    </Gobbet>
  </div>
);
