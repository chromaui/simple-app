import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import A from './A';

// Use match media
window.matchMedia('(min-width: 400px)').matches;

storiesOf('basics/A', module)
  .add('simple', () => <A thing={action('thing')}>Contents</A>, { chromatic: { skip: true } })
  .add('second', () => <A thing={action('thing')}>Second</A>);
