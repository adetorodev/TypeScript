class FieldTrip {
    destination: string;

    constructor(destination: string) {
        this.destination = destination
        console.log(`We're going to ${this.destination}`)
    }
    this.nonexistent = destination
    // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
    // nonexistent is not allowed because the class does not declare a nonexistent properties
}


const trip = new FieldTrip("planetarium")

trip.destination


// Function Properties
class WithPropertyParameters {

    // Function
    takeParameters = (input: boolean) => input ? "Yes" : "No"
}

const instance = new WithPropertyParameters();

instance.takeParameters(true)

// Initialization Checking
class WithValue {
    immediate = 0
    later: number
    mayBeUndefined: number | undefined

    // strict compiler settings enabled
    unused: number // error
    //     strict initialization checking is useful because it prevents code from acciden‐
    // tally forgetting to assign a value to a class property.

    constructor() {
        this.later = 1
    }
}

// Definitely assigned properties

class ActivitiesQueue {
    // should not have strict initialization checking applied
    pending!: string[]
    initialize(pending: string[]) {
        this.pending = pending
    }
    next() {
        return this.pending.pop();
    }
}
const activities = new ActivitiesQueue()

activities.initialize(['eat', 'sleep', 'code'])

activities.next()

// Optional Properties
class MissingInitializer {
    // optional
    property?: string;
}
new MissingInitializer().property?.length;

new MissingInitializer().property.length;
    // Error: Object is possibly 'undefined'.