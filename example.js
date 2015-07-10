import ImageCaption from '@economist/component-imagecaption';
import React from 'react';
import Gobbet from './index';
import Icon from '@economist/component-icon';

class WorldIfGobbet extends React.Component {

  render() {
    const customHeader = (<span className="gobbet-title-wrapper">WHAT <Icon type="logoWorldIF" className="worldif-logo"
    background="none" /></span>);
    return (
      <Gobbet className="gobbet" showShareBar={true} title={customHeader}>
        <ImageCaption caption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget \
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem." src="http://lorempixel.com/g/300/169/cats" textposition="top" />
      </Gobbet>
    );
  }
}
// Test different configuration for included sharebar.
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
      href: 'https://twitter.com/intent/tweet?url=http://www.google.com',
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
    <WorldIfGobbet />
    <Gobbet title="Just a title">
      This is a different Gobbet with no sharedBar
    </Gobbet>
    <Gobbet className="gobbet" showShareBar={true} sharebar={customSharebar}>
      <ImageCaption caption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget \
      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec \
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem." src="http://lorempixel.com/g/300/169/food"
      textposition="top" />
    </Gobbet>
  </div>
);

