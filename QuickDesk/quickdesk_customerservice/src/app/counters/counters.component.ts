import { Component, OnInit } from '@angular/core';
import { CounterManagement } from '../CodeClass';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  counter_management: CounterManagement;
  constructor() { 
    this.counter_management = new CounterManagement();
  }

  ngOnInit(): void {
    this.counter_management.retriveFromStorage();
    this.updateView(); 
  }

  // change status button for each counter 
  changeStatus(counter_num: number){
    this.counter_management.changeStatus(counter_num); 

    this.counter_management.saveInStorage();

    // change the view based on the button clicked 
    this.updateView();
          
  }

  // compelete service 
  completeBtn(counter_num: number){
    this.counter_management.completeServ(counter_num);
    this.counter_management.saveInStorage();
  }

  // compelete service 
  nextBtn(counter_num: number){
    var alert_check = this.counter_management.callNext(counter_num);
    if(!alert_check){
        alert("No tickets in the waiting queue");
    }
    this.counter_management.saveInStorage();
  }

  updateView(){
    for (let i=1; i<5; i++){
        //get counter 
        var counter = this.counter_management.getCounter(i);
        // updating online offline btn 
        //get the button status 
        var btn_status = document.getElementById("status_" + i.toString());
        // change button text 
        if (btn_status){
            if (counter.getStatus() == "available" || counter.getStatus() == "busy" ){
                btn_status.innerHTML = "Go Offline";
            } else if(counter.getStatus() == "offline"){
                btn_status.innerHTML = "Go Online"; 
            }
        }  
    }
  }

  



}
