import { trigger, state, style, transition, animate, query } from '@angular/animations';

const slideLeft = style({
  transform: 'translateX(100%)',
  display: 'none'
});
const slideRight = style({
  transform: 'translateX(-100%)',
  display: 'none'
});
const slideDown = style({
  transform: 'translateY(-100%)',
  display: 'none'
});

export const slideContentPages = trigger('routerAnimation', [
  state('concept', style({
    backgroundColor: 'white'
  })),
  state('menu', style({
    backgroundColor: 'rgb(78, 220, 202)'
  })),
  state('gallery', style({
    backgroundColor: 'rgb(255, 201, 21)'
  })),
  state('contact', style({
    backgroundColor: 'white',
    filter: 'invert(100%)'
  })),
  transition('menu => concept', animate('.5s ease-out', slideLeft)),
  transition('gallery => menu', animate('.5s ease-out', slideLeft)),
  transition('contact => gallery', animate('.5s ease-out', slideLeft)),
  transition('* <=> *', animate('.5s ease-out', slideRight))
]);
