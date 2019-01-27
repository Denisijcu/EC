import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Equiment } from '../models/Equiment';



@Injectable()
export class EquimentService {

  equiments: FirebaseListObservable<any[]>;
  equiment: FirebaseObjectObservable<any>;

  constructor( public af:AngularFireDatabase) {
    this.equiments = this.af.list('/electronics') as FirebaseListObservable<Equiment[]>;
   
    console.log('Los datos son *************',this.equiments);
   }

  
  getEquiments(){
    return this.equiments;
  }

  newEquiment(equiment:Equiment){
    this.equiments.push(equiment);
  }


  getEquiment(id:string){
    this.equiment = this.af.object('/electronics/' + id) as FirebaseObjectObservable<Equiment>;
    return this.equiment;
  }


   updateEquiment(id:string, equiment:Equiment){
    return this.equiments.update(id, equiment);
  }

  deleteEquiment(id:string){
    return this.equiments.remove(id);
  }
}


