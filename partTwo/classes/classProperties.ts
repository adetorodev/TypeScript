class FieldTrip {
    destination: string;

    constructor(destination: string){
        this.destination = destination
        console.log(`We're going to ${this.destination}`)
    }
    // this.nonexistent = destination
    // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
}

const trip = new FieldTrip("planetarium")

trip.destination

class WithPropertyParameters {
    takeParameters = (input:boolean) => input ? "Yes" : "No"
}

const instance = new WithPropertyParameters();

instance.takeParameters(true)

class WithValue {
    immediate = 0
    later: number
    mayBeUndefined: number | undefined

    unused: number

    constructor() {
        this.later = 1
    }
}

class ActivitiesQueue {
    pending!: string[]
    initialize(pending:string[]){
        this.pending=pending
    }
    next(){
        return this.pending.pop();
    }
}
const activities = new ActivitiesQueue()

activities.initialize(['eat', 'sleep', 'code'])

activities.next()