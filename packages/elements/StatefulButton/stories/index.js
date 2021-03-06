import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StatefullReactButton from '../src/StatefullReactButton';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Stateful Button')} />);

storiesOf('Stateful Button', module)
  .add('stateful react Button', () => <StatefullReactButton handleOnclick={action('clicked')}/>);
