import { configure } from '@storybook/react';

import 'storybook-chromatic';

function loadStories() {
  let req;
  req = require.context('../src/components/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
