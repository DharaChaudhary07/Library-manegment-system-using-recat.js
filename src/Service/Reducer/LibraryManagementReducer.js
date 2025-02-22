
const MainState = {
  Books: [],
  Book: null
}

const LibraryManagementReducer = (state = MainState, action) => {

  switch (action.type) {

    case "GetData":
      return {
        ...state,
        Books: action.payload
      }

    case "SingleRecord":
      return {
          ...state,
          Book: action.payload
      };

    default:
      return state;
      
  }

}

export default LibraryManagementReducer;