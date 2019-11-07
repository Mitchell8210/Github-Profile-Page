import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getData} from '../reducers/dataReducer'
import Icon from '../lib/Icon'

export default function Aside(props){
    const dispatch = useDispatch([])
    const user = useSelector(appState=>appState.dataReducer.user)
    
    useEffect(()=>{
        dispatch(getData())
    },[])

    return (
        <div className="asideContainer">
            <div className="imageContainer">
            <img src={user.avatar_url}/>
            <div className="statusContainer">
            <Icon className="statusIcon" icon="facebook" ></Icon>
            <div className="status">Set Status</div>
            </div>
            </div>
            <div className="userName">{user.name}</div>
            <div className="login">{user.login}</div>
            <div></div>
            <div></div>
        </div>
    )
}