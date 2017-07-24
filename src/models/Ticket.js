class Ticket {
  constructor(names, location, description) {
    this.names = names;
    this.location = location;
    this.description = description;
    this.timeOpened = new Date();
    this.timeSinceOpened = 'just now'
  }
}

export default Ticket;
