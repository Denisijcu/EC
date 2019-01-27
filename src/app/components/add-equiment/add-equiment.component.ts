import { Component, OnInit } from '@angular/core';
import { Equiment } from '../../models/Equiment';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router'; 
import { EquimentService} from '../../services/equiment.service';
//import { SettingsService} from '../../services/settings.service';
@Component({
  selector: 'app-add-equiment',
  templateUrl: './add-equiment.component.html',
  styleUrls: ['./add-equiment.component.css']
})
export class AddEquimentComponent implements OnInit {

id = '';
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

   disableBalanceOnAdd: boolean = true;
   
  constructor( 
    public flashMessageService: FlashMessagesService,
    public router: Router,
    public route:ActivatedRoute,
    public equimentService: EquimentService,
   // public settingsService: SettingsService
  ) { }

  ngOnInit() {
   // this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;

  }

  onSubmit({value, valid}: {value:Equiment, valid:boolean}){
   /*
    if (this.disableBalanceOnAdd){
      value.balance =0;
    }
    if (!valid){
      this.flashMessageService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate['add-client']
    } else {
     */
      // Add new client
      this.id = this.route.snapshot.params['id'];
      this.equimentService.newEquiment(value);
      this.flashMessageService.show('New equiment added', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['']);
   // }
  

  }
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-equiment',
  templateUrl: './add-equiment.component.html',
  styleUrls: ['./add-equiment.component.css']
})
export class AddEquimentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/