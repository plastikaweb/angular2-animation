import {Component, trigger, state, style, transition, animate} from '@angular/core';

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
                transform: 'translateX(300px) scale(1.5)'
            })),
            state('highlighted', style({
                'background-color': 'yellow',
                transform: 'translateX(-50px) scale(0.5)'
            })),
            transition('normal => medium', animate(300)),
            transition('medium => normal', animate(800)),
            transition('highlighted <=> *', animate(500))
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
