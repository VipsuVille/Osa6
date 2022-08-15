import { createSlice } from '@reduxjs/toolkit'





const reducer = createSlice({
    name: 'notificationer',
    initialState: {},
    reducers: {
  
   notification(state, action) {
        state.content = action.payload
        console.log('statecontentfromshowvoted', state.content)
    }
         
      }
    })
  
  
  export const {notification } = reducer.actions
  export default reducer.reducer