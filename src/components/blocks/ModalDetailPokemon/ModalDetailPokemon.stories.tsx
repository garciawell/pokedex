import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalDetailPokemon from './index';

const stories = storiesOf('components/blocks', module);
stories.add(`ModalDetail`, () => <ModalDetailPokemon />);
