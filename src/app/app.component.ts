import { Component , OnInit } from '@angular/core';
import { gettingRecord } from './globalService.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   myRecords;
   detail;
  title = 'Story';
  closeResult: string;
  hitApi=function(){
    this.gettingGlobalService.getRecord().subscribe(data => {
      this.myRecords=data.hits ;
      console.log(this.myRecords);
    });
  }
  constructor(private gettingGlobalService: gettingRecord,
              private modalService: NgbModal) {}

  ngOnInit(){
    this.hitApi();
    var myThis=this
    setInterval(function(c) {
      myThis.hitApi();
  }, 10000);
  
  }    

  open(content,X) {
    this.detail=X;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
