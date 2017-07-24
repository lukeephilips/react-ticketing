import Moment from "moment";

class Ticket {
  constructor(names, location, description) {
    this.names = names;
    this.location = location;
    this.description = description;
    this.timeOpened = new Date();
    this.timeSinceOpened = this.setTimeSinceOpened();
    console.log(this);
  }
  setTimeSinceOpened() {
    let now = new Moment(new Date());
    let then = new Moment(this.timeOpened);
    let newTimeSinceOpened = then.from(now, true);
    return newTimeSinceOpened;
  }
}

export default Ticket;
