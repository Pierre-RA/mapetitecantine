import { trigger, state, style, transition, animate, query } from '@angular/animations';

const slideLeft = style({
  transform: 'translateX(100%)',
  display: 'none',
  zIndex: '1'
});
const slideRight = style({
  transform: 'translateX(-100%)',
  display: 'none',
  zIndex: '1'
});
const slideDown = style({
  transform: 'translateY(-100%)',
  display: 'none',
  zIndex: '1'
});

export const slidePage = trigger('slide', [
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
  transition('void => *', style({})),
  transition('menu => concept', [
    query('.outlet', animate('.5s ease-out', slideLeft)),
  ]),
  transition('gallery => menu', [
    query('.outlet', animate('.5s ease-out', slideLeft))
  ]),
  transition('gallery => concept', [
    query('.outlet', animate('.5s ease-out', slideLeft))
  ]),
  transition('contact => *', [
    query('.outlet', animate('.5s ease-out', slideLeft))
  ]),
  transition('* <=> *', [
    query('.outlet', animate('.5s ease-out', slideRight))
  ])
]);
