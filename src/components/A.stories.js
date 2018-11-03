import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import A from './A';

storiesOf('basics/A', module)
  .addParameters({ chromatic: { viewports: [600, 1200] } })
  .add(
    'simple',
    () => {
      let bg = null;
      if (window.matchMedia('(max-width: 400px)').matches) {
        bg = 'cyan';
      } else if (window.matchMedia('(max-width: 800px)').matches) {
        bg = 'orange';
      }
      return (
        <A backgroundColor={bg} thing={action('thing')}>
          Contents
        </A>
      );
    },
    {
      chromatic: { viewports: [320, 600, 1200] }
    }
  )
  .add('second', () => <A thing={action('thing')}>Second</A>, {
    chromatic: { delay: 1000 }
  });
