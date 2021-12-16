const PubSub = {
    events: {
        "selectedBooking": [], // subscriber List for selectedBooking
        "selectedCar": [], // subscriber List for selectedCar
    },

    /**
     * Subscribe allows a component to call a function every time a certain value changed.
     * 
     * Currently available are: selectedBooking, selectedCar
     * 
     * @param {String} feed Stringified name of the information you want to subscribe to
     * @param {function} f the function to call whenever the feed gets updated
     */
    subscribe : function (feed, f) {
        console.log("A new subscriber!")
        this.events[feed] = this.events[feed] || []
        this.events[feed].push(f)
    },

    /**
     * 
     * @param {String} feed Stringified name of the information you want to unsubscribe fron
     * @param {function} f the function to remove from the subscriber List
     */
    unsubscribe : function (feed, f) {
        console.log("Unsubscribed! You're problematic!")
        if (this.events[feed]) { // if this feed exist 
            this.events[feed] = this.events[feed].filter(func => (func !== f)) // filter out this function from the subscriber list
        }
    },

    publish: function(feed, content) {
        if (this.events[feed]) { // if this feed exists
            console.log("We boutta drob the heat! The feed exists!")
            this.events[feed].forEach(f => {f(content)}) // for each function in the feed, call it with the new Data
        }   
    }

}

export default PubSub