import React, { useEffect }from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getRepos} from '../reducers/dataReducer'
import Icon from '../lib/Icon'
import Moment from 'react-moment';

export default function Main(props){

    const dispatch = useDispatch([])
    const repos = useSelector(appState=>appState.dataReducer.repos)
    
    useEffect(()=>{
        dispatch(getRepos())
    },[])


    return (
        <div className="mainContainer">
            <div className="mainLinks">
                <div>Overview</div>
                <div>Repositories <span>{repos.length}</span></div>
                <div>Projects<span>0</span></div>
                <div>Packages <span>0</span></div>
                <div>Stars <span>0</span></div>
                <div>Followers <span>0</span></div>
                <div>Following <span>0</span></div>
            </div>
            
            <div className="findRepositoryLine">
                <input className="findRepositoryInput" type="text" placeholder="Find a repository..."></input>
                <button className="typeButton">Type:<span>All</span></button>
                <button className="languageButton">Language:<span>All</span></button>
                <button className="newButton"><Icon icon="book"></Icon>New</button>
            </div>
            <hr/>
            <div className="repositoryList">
                {repos.map(repo=>{
                    return(
                    <div key={repo.id} className="repoContainer">
                        <div className="repoNameLine">
                    <div className="repoName">
                    <a target="_blank" href={repo.clone_url}>{repo.name}</a></div>
                    
                    <button className="starButton">Star<Icon icon="star"></Icon>
                    </button>
                    
                    
                    </div>
                    <div className="languageLine">
                        <div className="colors">
                    <div className={(() => {
                        switch (repo.language) {
                        case "JavaScript":   return "yellow";
                        case "HTML": return "red";
                        case "CSS":  return "purple";
                        default:      return "black";
                        }
                    })()}></div>
                    {repo.language}</div>
                    <div className="updated">Updated <Moment fromNow>{repo.updated_at}</Moment></div>
                    </div>
                    <hr/>
                    </div>
                    
                    )}   
                )}
            </div>
        </div>
    )
}