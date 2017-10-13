import { trigger, state, style, transition, animate, query } from '@angular/animations';

const slideDown = style({
  transform: 'translateY(-100%)',
  display: 'none'
});

export const slidePage = trigger('routerAnimation', [
  transition('void => *', style({})),
  transition('welcome => *', animate('.5s ease-out', slideDown))
]);
