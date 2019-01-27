import { Component, OnInit } from '@angular/core';
import { EquimentService } from '../../services/equiment.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Equiment } from '../../models/Equiment';

@Component({
  selector: 'app-equiment-details',
  templateUrl: './equiment-details.component.html',
  styleUrls: ['./equiment-details.component.css']
})
export class EquimentDetailsComponent implements OnInit {

  id: string;
  equiment: Equiment;
  hasBalance: boolean = true;
  showBalanceUpdateInput: boolean = true;

  constructor(
    public equimentService: EquimentService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    // Get Client
    this.equimentService.getEquiment(this.id).subscribe(equiment => {
      this.equiment = equiment;


    });

  }

  onDeleteClick() {
    if (confirm("Are you sure to delete?")) {
      this.equimentService.deleteEquiment(this.id);
      this.flashMessagesService.show('Equiment Deleted', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }

  updateBalance(id: string) {
    // Update client

    this.equimentService.updateEquiment(this.id, this.equiment);
    this.flashMessagesService.show('Status Updated', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/equiment/' + this.id]);
  }

}

