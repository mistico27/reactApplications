import React from 'react'
import "./topbar.css"
import {Search,Person3,Chat,Notifications} from "@mui/icons-material"

export default function Topbar(){
return(
    <div className="topbarcontainer">
        <div className="topbarLeft">
            <span className="logo">
                twitch clone<span className='autor'> autor: Christian Beltran Bedolla</span>
            </span>
        </div>
        <div className="topbarcenter">
            <div className='searchbar'>
               <Search className="searchIcon"/>
               <input placeholder='search for a post or video' className="searchinput"/> 
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarlink">HomPage</span>
                <span className="topbarlink">Timeline</span>

            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                   <Person3/>
                   <span className="topbarIconBadge">1</span> 
                </div>
                <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">2</span> 
                </div>
                <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">3</span>
                </div>
            </div>

        </div>


        
    </div>
)

}