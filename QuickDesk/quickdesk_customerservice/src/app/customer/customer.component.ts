import { Component, OnInit } from '@angular/core';
import { CounterManagement } from '../CodeClass';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  counter_management: CounterManagement;
  constructor() { 
    this.counter_management = new CounterManagement(); 
  }

  ngOnInit(): void {
    this.counter_management.retriveFromStorage();
    this.updateView(); 
    
  }

  // taking a number button 
  takeANumButton(){
    // update the queue 
    var number_given = this.counter_management.takeNumber();
    alert("Your number is: " + number_given);

    // store in local storage 
    this.counter_management.saveInStorage();
    // update the view 
    this.updateView(); 

  }

  // updating the view 
  updateView(){
    // counters 
    for (let i= 1; i<5; i++){
        // 
        const counter = this.counter_management.getCounter(i);
        // currently serving 
        const counter_num = counter.getCurrServ();
        const counter_view_serv = document.getElementById("curr_num_" + i.toString());
        if(counter_view_serv){
            counter_view_serv.innerHTML = counter_num.toString();
        }

        //current status 
        const counter_status = counter.getStatus();
        const counter_view_status = document.getElementById("status_" + i.toString());
        const counter_view_curr_num = document.getElementById("curr_num_" + i.toString());
        const counter_view_card = document.getElementById("card_" + i.toString());
        if(counter_view_status && counter_view_curr_num && counter_view_card){
            if(counter_status == "available"){
                counter_view_status.style.backgroundColor = '#32CD32';
            } else if(counter_status == "busy"){
                counter_view_status.style.backgroundColor = '#FF0000';
            } else if(counter_status == "offline"){
                counter_view_status.style.backgroundColor = '#808080';
                counter_view_curr_num.innerHTML = "Offline";
                counter_view_card.style.backgroundColor = '#D3D3D3';

            }
        }
    }

    // now serving and latest serving 
    const now_serv_view = document.getElementById("latest_num");
    if(now_serv_view){
        now_serv_view.innerHTML = this.counter_management.getNowServ().toString();
    }

    const latest_serv_view = document.getElementById("last_issued");
    if(latest_serv_view){
        latest_serv_view.innerHTML = this.counter_management.getLastServ().toString(); 
    }
  }



}
