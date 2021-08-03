import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { SortPipe } from './app.sortPipe';
import { MyDataService } from './my-data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
  items = [];
  order = "asc";
  isDataExistInArray = true;  
  

    onSubmit = function(user){      
      let object = {
        id : 0,
        name : user.studentname,
        result: {
          maths : user.maths,
          science : user.science,
          english : user.english,
          total : 0
        }              
      };
      //this.items.push(object);
      this.isDataExistInArray = false;
      this.save(object);
      this.form = new FormGroup({
        studentname : new FormControl (""),
        maths : new FormControl (""),
        science : new FormControl (""),
        english : new FormControl ("")            
        });
      
    }

  ngOnInit(){
    this.form = new FormGroup({
      studentname : new FormControl ("",Validators.required),
      maths : new FormControl ("",
            Validators.compose([
              Validators.required,
              Validators.minLength(1)
            ])  
      ),
      science : new FormControl ("",
            Validators.compose([
              Validators.required,
              Validators.minLength(1)
            ])  
      ),
      english : new FormControl ("",
            Validators.compose([
              Validators.required,
              Validators.minLength(1)
            ])  
      )
    });
    
  } 

  

  sortdata = function(val){
   let obj = {
    id : 0,
    name : "",
    result: {
      maths : 0,
      science : 0,
      english : 0,
      total : 0
    } 
    };

    let temp = Object.keys(obj);
    new SortPipe().transform(this.items,this.order,temp.indexOf(val) > -1 ? val : 'dates');
    this.order === "asc" ? this.order = "desc" : this.order === "desc" ? this.order = "asc" : this.order = "asc";
  }
  
  removeItem = function(object , indx){
    // alert(indx.studentid);
    //this.items.splice(indx,1);
    this.delete(object);
    if( this.items.length == 0)
      this.isDataExistInArray = true;    
  }

  constructor(private http: HttpClient){

  }

  delete(object){
    this.http.delete<any>('http://localhost:8081/studentapi/delete/'.concat(object.id)).subscribe((data: any) => {
      this.http.get<any>('http://localhost:8081/studentapi/all').subscribe((data1: any[]) => {
        this.items = data1;
       });
  });
  }

  save(object){
    this.http.post<any>('http://localhost:8081/studentapi/save',object).subscribe((data: any) => {
      this.http.get<any>('http://localhost:8081/studentapi/all').subscribe((data1: any[]) => {
        this.items = data1;        
       });
  });

}
}
