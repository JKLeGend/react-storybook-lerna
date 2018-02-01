import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StatelessReactButton from '../StatelessReactButton';

import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Stateless Button', module)
  .add('stateless react Button', () => <StatelessReactButton handleOnclick={action('clicked')}/>);
