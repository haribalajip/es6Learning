class Emitter {
    constructor(name) {
        this.events = [];
        this.name = name;
    }
    on (eventName , listener) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(listener);
    }

    emit (eventName) {
        console.log(eventName);
        if(this.events[eventName]){
            this.events[eventName].map(item =>{
            item();
            })
        }
    }

    getName () {
        console.log(this.name);
    }
}
class Child extends Emitter{
    constructor(name, id) {
        super(name) /* //if the sub-class has a constructor, it is compulsory to call super 
        before using 'this' */
        this.id = id;
    }
    getName() {
        console.log(this.name, this.id );
    }
}
var e = new Emitter('start');
e.getName();

var c = new Child('i am a child. ', 22);
c.getName();
