public class LifoQueue implements IQueuable {

    String[] queue = new String[0];

    @Override
    public String[] enqueue(String value) {
        /*
         * Function used to add a new element to the queue. 
         * Returns - the new queue
         */

        // define the new size of the queue
        int len = this.queue.length + 1; 
        // define the new array that will replace the current array 
        String[] new_array = new String[len]; 

        // copy elements from old array to new array 
        for (int i = 0; i < len-1; i++) {
            new_array[i] = this.queue[i];
        }
        
        // assign the new value to the queue 
        new_array[len-1] = value;

        //replace the old queue with new queue
        this.queue = new_array;

        return this.queue;
    }

    @Override
    public String dequeue() {
        /*
         * Returns the last element added to the queue and removes it from the queue
         */ 
        
         // element removed from queue  
        String element = this.queue[this.queue.length-1];

        // length of the new queue 
        int length = this.queue.length - 1; 

        // new array to replac
        String[] new_array = new String[length]; 

        for (int i = 0; i <length; i++) {
            new_array[i] = this.queue[i];
        }

        this.queue = new_array; 

        return element;
    }

    @Override
    public String[] getQueue() {
        /*
         * Function returns elements that are in the queue.
         */
        return this.queue;
    }

    @Override
    public int size() {
         /*
         * Function returns the size of the queue.
         */
        return this.queue.length;
    }
    
}
