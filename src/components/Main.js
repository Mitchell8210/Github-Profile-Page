import React, { useEffect }from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getRepos} from '../reducers/dataReducer'
import Icon from '../lib/Icon'

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
                <div>Repositories {repos.length}</div>
                <div>Projects</div>
                <div>Packages</div>
                <div>Stars</div>
                <div>Followers</div>
                <div>Following</div>
            </div>
            
            <div className="findRepositoryLine">
                <input className="findRepositoryInput" type="text" placeholder="Find a repository..."></input>
                <div className="typeButton">Type:<span>All</span></div>
                <div className="languageButton">Language:<span>All</span></div>
                <div className="newButton">New</div>
            </div>
            <hr/>
            <div className="repositoryList">
                {repos.map(repo=>{
                    return(
                    <div key={repo.id} className="repoContainer">
                        <div className="repoNameLine">
                    <div className="repoName">
                    <a target="_blank" href={repo.clone_url}>{repo.name}</a></div>
                    
                    <div className="starButton">Starr
                    </div>
                    
                    
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
                    <div>Updated on/at: {repo.updated_at}</div>
                    </div>
                    <hr/>
                    </div>
                    
                    )}   
                )}
            </div>
        </div>
    )
}