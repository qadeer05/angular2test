import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-detail',
    template: `
        <div  *ngIf="hero">
            <span>{{hero.name}} details!</span>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
            <label>name: </label>
            <div><input [(ngModel)]="hero.name" placeholder="name"></div>
            </div>
        </div>
        <div *ngFor="#hero of heroes">
            <span>{{hero.id  + ';'}}</span>
        </div>
    `,
    inputs: ['hero']        
})

export class HeroDetailComponent implements OnInit{
    public hero: Hero;
    public heroes: Hero[];
    
    constructor(private _heroService: HeroService){}
    
    getHeroes()
    {
        this._heroService.getHeroes().then(x=> this.heroes = x);
    }
    
    ngOnInit(){
        this.getHeroes();
    }
}