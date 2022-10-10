import {  CounterManagement } from "./CodeClass"


var COUNTER_MANAGEMENT: CounterManagement;
const raw_data = localStorage.getItem("COUNTER_MANAGEMENT");
if(raw_data != null){
    const raw_parsed = JSON.parse(raw_data);

    // get the queue 

    COUNTER_MANAGEMENT = new CounterManagement();
} else {
    COUNTER_MANAGEMENT = new CounterManagement();
}
   
    

class CustomerView{

    // taking a number button 
    takeANumButton(){
        // update the queue 
        var number_given = COUNTER_MANAGEMENT.takeNumber();
        alert("Your number is: " + number_given);

        // update queue in local storage 

        // update the view 
        this.updateView(); 
    }

    // updating the view 
    updateView(){
        // counters 
        for (let i= 1; i<5; i++){
            // 
            const counter = COUNTER_MANAGEMENT.getCounter(i)
            // currently serving 
            const counter_num = counter.getCurrServ();
            const counter_view_serv = document.getElementById("curr_num_" + i.toString());
            if(counter_view_serv){
                counter_view_serv.innerHTML = counter_num.toString();
            }

            //current status 
            const counter_status = counter.getStatus();
            const counter_view_status = document.getElementById("status_" + i.toString());
            if(counter_view_status){
                if(counter_status == "available"){
                    counter_view_status.style.backgroundColor = '#32CD32';
                } else if(counter_status == "busy"){
                    counter_view_status.style.backgroundColor = '#FF0000';
                } else if(counter_status == "offline"){
                    counter_view_status.style.backgroundColor = '#808080';
                }
            }
        }

        // now serving and latest serving 
        const now_serv_view = document.getElementById("latest_num");
        if(now_serv_view){
            now_serv_view.innerHTML = COUNTER_MANAGEMENT.getNowServ().toString();
        }

        const latest_serv_view = document.getElementById("last_issued");
        if(latest_serv_view){
            latest_serv_view.innerHTML = COUNTER_MANAGEMENT.getLastServ().toString(); 
        }
    }

}

class CounterView{
    // change status button for each counter 
    changeStatus(counter_num: number){
        COUNTER_MANAGEMENT.changeStatus(counter_num); 

        // change the view based on the button clicked 
        this.updateView();
              
    }

    // compelete service 
    completeBtn(counter_num: number){
        COUNTER_MANAGEMENT.completeServ(counter_num);
    }

    // compelete service 
    nextBtn(counter_num: number){
        var alert_check = COUNTER_MANAGEMENT.callNext(counter_num);
        if(!alert_check){
            alert("No tickets in the waiting queue");
        }
    }

    updateView(){
        for (let i=1; i<5; i++){
            //get counter 
            var counter = COUNTER_MANAGEMENT.getCounter(i);
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


export{}