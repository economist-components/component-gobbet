import ImageCaption from './../component-imagecaption';
import React from 'react';
import Gobbet from './index';
import Icon from './../component-icon';

class WorldIfGobbet extends React.Component {

  render() {
    let customHeader = <span className="gobbet-title-wrapper">WHAT <Icon type='logoWorldIF' className="worldif-logo" background="none"/></span>;
    return (
      <Gobbet className="gobbet" showShareBar={true} title={customHeader}>
        <ImageCaption caption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
      </Gobbet>
      );
  }
};
// Test different configuration for included sharebar
var customSharebar = {
    useSvg: true,
    layout: 'horizontal',
    icon: {
      color: "#FFFFFF"
    },
    icons: [
      {
        href: "http://www.facebook.com/sharer/sharer.php?u=http://www.google.com",
        title: "Share on Facebook",
        className: "fb",
        type: "facebook",
        s: {
          events: "event76"
        }
      },
      {
        href: "https://twitter.com/intent/tweet?url=http://www.google.com",
        title: "Share on Twitter",
        className: "twitter",
        type: "twitter",
        s: {
          events: "event31"
        }
      }
    ]
  };

export default (
    <div>
      <WorldIfGobbet />
      <Gobbet title="Just a title">
        This is a different Gobbet with no sharedBar
      </Gobbet>
      <Gobbet className="gobbet" showShareBar={true} sharebar={customSharebar}  >
        <ImageCaption caption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc," src="http://lorempixel.com/g/300/169/food" textposition="top" />
      </Gobbet>
    </div>
);

