import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import Basic from './Form/Basic';
import Dynamic from './Form/Dynamic';
import Complex from './Form/Complex';
import State from './Form/State';
import Props from './Form/Props';
import Api from './Form/Api';
import SimpleValidation from './Validation/SimpleValidation';
import ComplexValidation from './Validation/ComplexValidation';
import ValidationControl from './Validation/ValidationControl';
import Notifications from './Validation/Notifications';
import FormLevelValidation from './Validation/FormLevelValidation';
import FormatParse from './Formatting/FormatParse';
import Mask from './Formatting/Mask';
import UnnecessaryRendering from './Gotchas/UnnecessaryRendering';
import Scope from './Gotchas/Scope';
import Optimization from './Gotchas/Optimization';
import DynamicFields from './Dynamic/DynamicFields';
import CustomInputs from './CustomInputs';
import {
  TextInput,
  NumberInput,
  TextAreaInput,
  RadioInput,
  CheckboxInput,
  SelectInput,
  MultiSelectInput,
  Intro as InputIntro
} from './Inputs';

import { ArrayOfFields, ArrayOfScopes, DynamicArrays } from './Arrays';

import {
  WithFormApi,
  WithFormState,
  WithFieldApi,
  WithFieldState
} from './HOC';

import {
  UseFormApi,
  UseFormState,
  UseFieldApi,
  UseFieldState
} from './Hooks';

addDecorator(StoryWrapper);

storiesOf('Introduction', module).add('Getting Started', Intro);

storiesOf('Form', module)
  .add('Basic', Basic)
  .add('Complex', Complex)
  .add('State', State)
  .add('Api', Api)
  .add('Props', Props)
  .add('Dynamic', Dynamic);

storiesOf('Inputs', module)
  .add('Intro', InputIntro)
  .add('Text', TextInput)
  .add('Text Area', TextAreaInput)
  .add('Radio Input', RadioInput)
  .add('Checkbox Input', CheckboxInput)
  .add('Select Input', SelectInput)
  .add('Multi Select Input', MultiSelectInput)
  .add('Number Input', NumberInput);

storiesOf('CustomInputs', module).add('Creating Custom Inputs', CustomInputs);

storiesOf('Arrays', module)
  .add('Array Of Fields', ArrayOfFields)
  .add('Array Of Scopes', ArrayOfScopes)
  .add('Dynamic Arrays', DynamicArrays);


storiesOf('Validation', module)
  .add('Simple Validation', SimpleValidation)
  .add('Complex Validation', ComplexValidation)
  .add('Validation Control', ValidationControl)
  .add('Form Level Validation', FormLevelValidation)
  .add('Notifications', Notifications);

storiesOf('Formatting', module)
  .add('Mask', Mask)
  .add('Format and Parse', FormatParse);

storiesOf('Hooks!', module)
  .add('useFormApi', UseFormApi)
  .add('useFormState', UseFormState)
  .add('useFieldApi', UseFieldApi)
  .add('useFieldState', UseFieldState);

storiesOf('High Order Components', module)
  .add('withFormApi', WithFormApi)
  .add('withFormState', WithFormState)
  .add('withFieldApi', WithFieldApi)
  .add('withFieldState', WithFieldState);

storiesOf('Gotchas', module)
  .add('Unnecessary Rendering', UnnecessaryRendering)
  .add('Optimization', Optimization)
  .add('Scope', Scope);

storiesOf('Dynamic Forms', module).add('Dynamic Fields', DynamicFields);
