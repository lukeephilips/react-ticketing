import ticketList from './../../src/reducers/ticket-list-reducer';
import c from './../../src/constants';

describe("Ticket list reducer", () => {

  test('should return equivilant state if no action type is recognized', () => {
    expect(ticketList([], { type: null })).toEqual([]);
  });

  test('imported value should match action type string', () => {
    expect(c.ADD_TICKET).toEqual('ADD_TICKET');
  });

});
