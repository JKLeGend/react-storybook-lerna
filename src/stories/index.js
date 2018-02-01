import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StatelessReactButton from '../../packages/elements/StatelessButton/StatelessReactButton';
import StatefullReactButton from '../../packages/elements/StatefulButton/StatefullReactButton';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('stateful react Button', () => <StatefullReactButton handleOnclick={action('clicked')}/>)
  .add('stateless react Button', () => <StatelessReactButton handleOnclick={action('clicked')}/>);
