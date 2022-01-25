import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';

const stories = storiesOf('components/elements', module);
stories.add(`Input`, () => <Input placeholder="what pokemon" />);
