public class FifoQueue implements IQueuable {
    private String[] queue = new String[0]; 

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
         * Returns the first element added to the queue and removes it from the queue
         */
        //assign the value to be returned.
        String element = this.queue[0]; 

        //remove the element from the queue 
        int len = this.queue.length - 1; 

        // create new array to replace the old queue 
        String[] new_array = new String[len];
        
        for (int i = 0; i < len; i++) {
            new_array[i] = this.queue[i+1];
        }

        //replace the old queue 
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
