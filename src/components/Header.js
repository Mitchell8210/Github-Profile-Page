import React, {useEffect} from 'react'
import Icon from '../lib/Icon'
import {useDispatch, useSelector} from 'react-redux'
import {getData} from '../reducers/dataReducer'
export default function Header(props){

    const dispatch = useDispatch([])
    const user = useSelector(appState=>appState.dataReducer.user)
    
    useEffect(()=>{
        dispatch(getData())
    },[])

    return (
        <div className="header">
            <div className="header-left">
            <div className="githubIcon"><Icon className="gitHub" icon="github"></Icon></div>
            <input className="searchBox" type='text'/>
            <div className="headerLinks">
                <div>Pull Requests</div>
                <div>Issues</div>
                <div>Marketplace</div>
                <div>Explore</div>
            </div>
            </div>
            <div className="rightSideIcons">
            <div className="bellIcon"><Icon icon="bell"></Icon></div>
            <div className="plusSign"><Icon icon="plus"></Icon></div>
            <div className="littlePic"><img width="35px" src={user.avatar_url}/></div>
            </div>
        </div>

    )
}

