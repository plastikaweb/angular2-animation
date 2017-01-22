import {Component, trigger, state, style, transition, animate, keyframes} from '@angular/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('divState', [
            state('normal', style({
                'background-color': 'red',
                transform: 'translateX(0)'
            })),
            state('highlighted', style({
                'background-color': 'blue',
                transform: 'translateX(100px)'
            })),
            transition('normal <=> highlighted', animate(300))
        ]),
        trigger('wildState', [
            state('normal', style({
                'background-color': 'red',
                transform: 'translateX(0) scale(1)'
            })),
            state('medium', style({
                'background-color': 'blue',
                transform: 'translateX(100px) scale(1)'
            })),
            state('highlighted', style({
                'background-color': 'yellow',
                transform: 'translateX(0) scale(0.5)'
            })),
            transition('normal => medium', animate(300)),
            transition('medium => normal', animate(800)),
            transition('highlighted <=> *', [
                style({
                    'background-color': 'orange'
                }),
                animate(1000, style({
                    borderRadius: '50px'
                })),
                animate(500)
            ])
        ]),
        trigger('list1', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void <=> *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100px)'
                }),
                animate(100)
            ]),
            transition('* <=> void', [
                animate(300, style({
                    transform: 'translateX(100px)',
                    opacity: 0
                }))
            ])
        ]),
        trigger('list2', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void <=> *', [
                animate(1000, keyframes([
                    style({
                        transform: 'translateX(-100px)',
                        opacity: 0,
                        offset: 0
                    }),
                    style({
                        transform: 'translateX(-50px)',
                        opacity: 0.5,
                        offset: 0.3
                    }),
                    style({
                        transform: 'translateX(-20px)',
                        opacity: 1,
                        offset: 0.8
                    }),
                    style({
                        transform: 'translateX(0px)',
                        opacity: 1,
                        offset: 1
                    })
                ]))
            ]),
            transition('* <=> void', [
                animate(300, style({
                    transform: 'translateX(100px)',
                    opacity: 0
                }))
            ])
        ])
    ]
} )
export class AppComponent {
    state = 'normal';
    wildState = 'normal';
    list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
        this.state  = this.state === 'normal' ? 'highlighted' : 'normal';
        this.wildState  = this.state === 'normal' ? 'highlighted' : 'normal';
    }

    onShrink() {
        this.wildState  = this.wildState === 'normal' ? 'medium' : 'normal';
    }

    onAdd(item) {
        this.list.push( item );
    }

    onDelete(item) {
        this.list.splice( this.list.indexOf( item ), 1 );
    }
}
