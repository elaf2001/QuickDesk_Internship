class Counter{
    status:string; // available/busy/offline
    counter_num:number; // 1/2/3/4
    curr_serving:number; 

    //constructor 
    constructor(counter_num:number) { 
        this.counter_num = counter_num;
        this.status = "available";
        this.curr_serving = 0;
    }  

    // get methods 
    getStatus():string{
        return this.status;
    }

    getCounterNum():number{
        return this.counter_num;
    }

    getCurrServ():number{
        return this.curr_serving;
    }

    //setters
    setStatus(value:string):void{
        this.status = value;
    }

    setCurrServ(value:number):void{
        this.curr_serving = value;
    }

}

class Queue{
    // implements FIFO queue! 
    list:number[]; 

    //methods to update the queue 
    //constructor 
    constructor() { 
        this.list = [];
    }  
    // add to queue 
    enqueue(value: number):number[]{
        this.list.push(value);
        return this.list;
    }

    //remove item and return the item that was removed
    dequeue():number{
        var element = this.list.shift(); 
        if (element != undefined){
            return element;
        } else {
            return 0; 
        }
    }

    //returns the queue
    getQueue():number[]{
        return this.list;
    }

    //returns the size of the queue 
    size():number{
        return this.list.length;
    }


}

class CounterManagement{
    now_serving:number;
    last_serving:number;
    queue:Queue;
    counter_list:Counter[]; 

    //constructor 
    constructor() { 
        this.now_serving = 0;
        this.last_serving = 0;
        this.queue = new Queue();
        this.counter_list = []
        for (let i = 1; i < 5; i++) {
            var counter = new Counter(i); 
            this.counter_list.push(counter);
        }
    
    }  


    // methods to manage the counter 
    takeNumber():number{
        // get the new value based on the queue
        if(this.queue.size() > 0 ){
            var newly_added = this.queue.getQueue()[this.queue.size()-1] + 1;
            //add new value to the queue
            
        } else if(this.last_serving != 0 ){
            // if the queue is empty but has been operated before 
            var newly_added = this.last_serving + 1;
        } else{
            // if the queue is empty and is the first number taken
            var newly_added = 1;
        }
        this.queue.enqueue(newly_added);
        return newly_added 
    }

    // methods that are used to update the each counter 

    // change the status of the counter
    changeStatus(counter_num:number): string{
        // get the counter we want to change the status of 
        var counter = this.getCounter(counter_num); 

        if (counter.getStatus() == "offline") {
            counter.setStatus("available"); 
        } else if(counter.getStatus() == "available"){
            counter.setStatus("offline");
        } else if (counter.getStatus() == "busy"){
            this.completeServ(counter_num); 
            counter.setStatus("offline"); 
        }
        return counter.getStatus();
    }

    //compelete the current serving 
    completeServ(counter_num:number){
        // get the counter we want to compelete the serving of 
        var counter = this.getCounter(counter_num); 

        // change the currently serving attribute 
        counter.setCurrServ(0); // 0 in this case is no one 
        counter.setStatus("available");
    }

    //get the next person to serve 
    callNext(counter_num:number): boolean{
        // get the counter we want to compelete the serving of 
        var counter = this.getCounter(counter_num); 

        // get the next value in the queue 
        if(this.queue.size() > 0){
            var next_num = this.queue.dequeue();

            //update management
            this.last_serving = counter.getCurrServ();
            this.now_serving = next_num;

            //update counter
            counter.setCurrServ(next_num);
            counter.setStatus("busy");
            return true;
  
        } else {
            // if there is no numbers in the queue left 
            this.completeServ(counter_num); 
            return false;
        }
    }




    // methods to get the values 
    getNowServ():number{
        return this.now_serving;
    }

    getLastServ():number{
        return this.last_serving;
    }
    
    //get counter - returns the specified counetr 
    getCounter(counter_num:number):Counter{
        return this.counter_list[counter_num -1]; 
    }

}

export {CounterManagement}; 
