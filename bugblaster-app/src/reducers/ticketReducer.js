export default function tickerReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case "DELETE_TICKET":
      console.log(action.payload.id);
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
