import React from 'React';
import { RouteComponentProps } from '@reach/router';

import { Switcher } from '../utils/Switcher';

import { UseState as ClassComp } from './class';
import { UseState as HookComp } from './hook';

export const UseStateRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      { name: 'Hook', component: <HookComp /> },
      { name: 'Class', component: <ClassComp /> }
    ]}
  />
);
