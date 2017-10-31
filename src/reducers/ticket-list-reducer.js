import c from './../constants'

export default (state = [], action) => {
  switch (action.type) {
    case c.ADD_TICKET:
      const {names, location, description, timeOpened, id} = action;

      return [
        ...state,
        {
          names: names,
          location: location,
          description: description,
          timeOpened: timeOpened,
          id: id
        }
      ]
    case c.DELETE_TICKET:
      let newState = state.filter(ticket => ticket.id !== action.id)
      return newState;
    default:
      return state;
  }
}
