import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

export const slideInAnimation = 
    trigger('routeAnimations', [
        transition('Login => Principal',[
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('1000ms ease-out', style({ left: '-100%'}))
                ]),
                query(':enter', [
                    animate('1000ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('Principal => Login',[
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('1000ms ease-out', style({ left: '100%'}))
                ]),
                query(':enter', [
                    animate('1000ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ])
