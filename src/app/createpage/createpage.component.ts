import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../retrive.service';

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.css']
})
export class CreatepageComponent implements OnInit {

  fName = "";
  sName = "";
  age = null;
  sDepartment = "Select Department";
  apiError = false;
  apiSuccess = false;
  showError = false;

  constructor(public insertService: RetriveService) { }

  ngOnInit() {
    this.sDepartment = "Select Department";
  }

  //insert function 
  submit() {
    this.showError = false;
    var data = {
      "firstname": this.fName,
      "lastname": this.sName,
      "age": this.age
    }
    console.log(data);

    if (this.fName != '' && this.sName != '' && this.age != null) {

      console.log(data);
     // calling api inserting detials into api
       this.insertService.insertApi(data).subscribe(res => {
        this.apiSuccess= true;
        this.fName ='';
        this.sName = '';
        this.age = '';
         console.log("created response", res);
       }, error => {
        this.apiError = true;
         console.log(error);
       })

    } else {

      //alert("error");
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);

    }


  }

}
