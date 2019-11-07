
import Axios from "axios"
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

///ACTION NAMES
const GET_DATA = 'GET_DATA'
const GET_REPOS = 'GET_REPOS'


//REDUCER
const initialState = {
  user: {},
  repos:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: 
      return {...state, user: action.payload}
    case GET_REPOS:
      return {...state, repos: action.payload}
    // actions
    default:
      return state
  }
}


//////////////// ACTIONS
// const dispatch = useDispatch()
export function getData(){
 return dispatch=>{
    Axios.get(`https://api.github.com/users/Mitchell8210`).then(resp=>{
        dispatch({
          type: GET_DATA,
          payload: resp.data
        })
    })
  }
}
export function getRepos(){
   return dispatch=>{
    Axios.get(`https://api.github.com/users/Mitchell8210/repos`).then(resp=>{
      dispatch({
        type: GET_REPOS,
        payload: resp.data
      })
    })
  }
}