import React, { useReducer } from 'react'

const initialState = {
  data: [],
  error: '',
  isLoading: false,
  selectedItems: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PENDING_RESULTS':
      return {
        ...state,
        isLoading: true,
      }
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case 'SET_ERROR_RESULTS':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (item) => item.Title !== action.payload
        ),
      }
    case 'ADD_ITEM_PENDING':
      return {
        ...state,
      }
    case 'ADD_ITEM':
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      }
    case 'RESET_RESULTS':
      return {
        data: [],
        error: '',
        selectedItems: [...state.selectedItems],
      }
    case 'RESTART_GAME':
      return {
        data: [],
        error: '',
        selectedItems: [],
      }
    default:
      return state
  }
}

const DataContext = React.createContext()

const DataStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataStore, DataContext }
