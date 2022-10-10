package task1c;

public class FifoQueue extends IQueuable{

    @Override
    public String dequeue() {
        /*
         * Returns the first element added to the queue and removes it from the queue.
         */

        if (this.getQueue().size() != 0){
            // get the element to return 
            String element = this.getQueue().get(0);

            // remove the element from queue 
            this.getQueue().remove(0);


            return element;
        } else {
            return "The queue is empty"; 
        }
    }
    
}
