import {BREAKPOINTS, DEFAULT_BREAKPOINTS} from '@angular/flex-layout';

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINTS,
  useValue: [...DEFAULT_BREAKPOINTS]
};