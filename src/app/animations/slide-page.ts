import { trigger, state, style, transition, animate, query } from '@angular/animations';

const left = [
  // Initial state of new route
  query(':enter',
    style({
      position: 'fixed',
      width:'100%',
      transform: 'translateX(-100%)'
    }),
    {optional:true}),
  // move page off screen left on leave
  query(':leave',
    animate('500ms ease',
      style({
        position: 'fixed',
        width:'100%',
        transform: 'translateX(100%)'
      })
    ),
  {optional:true}),
  // move page in screen from right to left
  query(':enter',
    animate('500ms ease',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    ),
  {optional:true}),
];

const right = [
  // Initial state of new route
  query(':enter',
    style({
      position: 'fixed',
      width:'100%',
      transform: 'translateX(100%)'
    }),
    {optional:true}),
  // move page off screen left on leave
  query(':leave',
    animate('500ms ease',
      style({
        position: 'fixed',
        width:'100%',
        transform: 'translateX(-100%)'
      })
    ),
  {optional:true}),
  // move page in screen from right to left
  query(':enter',
    animate('500ms ease',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    ),
  {optional:true})
];

export const slidePage = trigger('routerAnimation', [
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
  transition('menu => concept', left),
  transition('gallery => menu', left),
  transition('contact => gallery', left),
  transition('* <=> *', right)
]);
