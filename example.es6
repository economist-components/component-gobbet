import React from 'react';
import Gobbet from './index.es6';
import ImageCaption from '@economist/component-imagecaption';

export default (
  <div>
    <Gobbet title="Default Gobbet">
      <ImageCaption
        caption="This is a default Gobbet"
        sources={[
          { url: 'https://placehold.it/640x470', width: 640, height: 360, dppx: 1 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ]}
        alt=""
      />
    </Gobbet>
    <Gobbet>
      <ImageCaption
        caption="This is a default Gobbet"
        sources={[
          { url: 'https://placehold.it/640x470', width: 640, height: 360, dppx: 1 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ]}
        alt=""
      />
    </Gobbet>
  </div>
);
