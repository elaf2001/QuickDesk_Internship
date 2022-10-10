package task1c;

public class LifoQueue extends IQueuable {

    @Override
    public String dequeue() {
        /*
         * Returns the last element added to the queue and removes it from the queue.
         */
        if (this.getQueue().size() != 0){
            // get the element to return 
            String element = this.getQueue().get(this.size() - 1);

            // remove the element from queue 
            this.getQueue().remove(this.size() - 1);


            return element;
        } else {
            return "The queue is empty"; 
        }
        
    }
    
}
