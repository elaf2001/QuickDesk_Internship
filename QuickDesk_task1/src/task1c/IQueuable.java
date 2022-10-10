package task1c;

import java.util.ArrayList;

public abstract class IQueuable {
    
    private ArrayList<String> queue = new ArrayList<String>();

    //adds value to queue and returns new queue
    public ArrayList<String> enqueue(String value){
        // adding value to the queue 
        this.queue.add(value);
        
        return this.queue;
    };
    

    //returns a list of all the items in the queue
    public ArrayList<String> getQueue(){
        return this.queue;
    };

    //returns the number of items in the queue
    public int size(){
        return this.queue.size();
    };

    //removes item from queue, and returns the item removed
    public abstract String dequeue();


}
