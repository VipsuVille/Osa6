import { createSlice } from '@reduxjs/toolkit'
let timeoutId
const reducer = createSlice({
    name: 'notificationer',
    initialState: null,
    reducers: {
  
   notification(state, action) {
        console.log('statecontentfromshowvoted', action.payload)
        return state = action.payload
    },
    removeNotification(state, action) {
      return null
    }    
      }
    })
    export const setNotification = (print, time) =>{
    
      return dispatch => {
          dispatch(notification(print))
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
              dispatch(removeNotification())
          }, time*1000);
      }
    }
    

  export const {notification, removeNotification } = reducer.actions
  export default reducer.reducer