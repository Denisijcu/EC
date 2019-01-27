import { Component, OnInit } from '@angular/core';
import {EquimentService } from '../../services/equiment.service';
import { Equiment } from '../../models/Equiment';

@Component({
  selector: 'app-equiment',
  templateUrl: './equiment.component.html',
  styleUrls: ['./equiment.component.css']
})
export class EquimentComponent implements OnInit {
  equiments:any[];
  totalEq:number;

  constructor(
    public equimentService:EquimentService
  ) { }

  ngOnInit() {
      this.equimentService.getEquiments().subscribe(equiments => {
      this.equiments = equiments;
      console.log(this.equiments);
      this.getTotalEQ();
    });
  }


  getTotalEQ(){
    let total = 0;
    for(let i = 0;i < this.equiments.length;i++){
      total += parseFloat(this.equiments[i].status);
    }
    this.totalEq = total;
    console.log(this.totalEq);
  }

}

/*
;

 
  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  getTotalOwed(){
    let total = 0;
    for(let i = 0;i < this.clients.length;i++){
      total += parseFloat(this.clients[i].balance);
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }

}
*/