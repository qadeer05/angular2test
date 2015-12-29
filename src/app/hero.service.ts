import {Injectable} from 'angular2/core'
import {Hero} from './hero'
import {Heroes} from './mock-heroes'

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(Heroes);
    }
    
    
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(Heroes), 2000) // 2 seconds
        );
    }

}