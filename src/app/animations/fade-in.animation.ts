﻿import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition('* => *', [

    query(':enter',
      [
        /* Modified the css here so to push the new element on top while its transitioning */
        style({opacity: 0, position: 'fixed', top: 0, left: 0, width: '100%', background: '#fff', height: '100%', 'z-index' : 10})
      ],
      {optional: true}
    ),

    query(':leave',
      [
        style({opacity: 1}),
        animate('0.5s', style({opacity: 0}))
      ],
      {optional: true}
    ),

    query(':enter',
      [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1}))
      ],
      {optional: true}
    )

  ])

]);
