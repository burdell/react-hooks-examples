import React from 'React';
import { RouteComponentProps } from '@reach/router';

import { Switcher } from '../utils/Switcher';

import { UseRef as ClassComp } from './class';
import { UseRef as HookComp } from './hook';

export const UseRefRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      { name: 'Hook', component: <HookComp /> },
      { name: 'Class', component: <ClassComp /> }
    ]}
  />
);
