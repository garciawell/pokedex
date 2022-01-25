import React from 'react';
import { storiesOf } from '@storybook/react';
import Dashboard from './index';

const stories = storiesOf('pages', module);
stories.add(`CardPokemon`, () => <Dashboard />);
