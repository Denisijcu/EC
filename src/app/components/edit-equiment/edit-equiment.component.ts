import { Component, OnInit } from '@angular/core';

import { EquimentService } from '../../services/equiment.service'; 
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Equiment } from '../../models/Equiment';


@Component({
  selector: 'app-edit-equiment',
  templateUrl: './edit-equiment.component.html',
  styleUrls: ['./edit-equiment.component.css']
})
export class EditEquimentComponent implements OnInit {
  id:string;
 
 
 
  equiment:Equiment = {
    brand:'',
    department: '',
    model:'',
    serial_x0020_number:'',
    user: '',
    asset_x0020_tag: '',
    date: '',
    item:'',
    po: '',
    part_x0020_number:'',
    status:0


  };
  disableBalanceOnEdit = true;
  constructor(  public equimentService: EquimentService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Get Client
    this.equimentService.getEquiment(this.id).subscribe(equiment => {
      this.equiment = equiment;
    });
  }

  onSubmit({value, valid}:{value:Equiment, valid:boolean}){
    if(!valid){
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['edit-equiment/'+this.id]);
    } else {
      // Update equiment
      this.equimentService.updateEquiment(this.id, value);
      this.flashMessagesService.show('Equiment updated', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/equiment/'+this.id]);
    }
  }
}


