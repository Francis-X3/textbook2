import React,{useState} from 'react'
import  IoIcons  from 'react-icons/io'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Sidebarlink = styled(Link)`
display:flex;
color:#e1e9fc;
justify-content: space-around;
align-items: center;
padding:20px;
list-style:none;
height: 60px;
text-decoration: none;
font-size : 18px;

&:hover{
    background:#252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
}

`;

const SidebarLabel=styled.span`
margin-left:5px;
`
const DropdownLink = styled(Link)`
background:#414757;
height: 60px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration: none;
color:#f5f5f5
font-size:18px;

&:{
   background : #632ce4;
   cursor: pointer;
}
`

const Submenu = ({item}) => {
    const [subnav,setSubnav] = useState(false);
    const showSubnav =()=> setSubnav(!subnav)
    return(
        <>
        <Sidebarlink to={item.link} onClick={item.subNav && showSubnav}>
            <div>
               {item.Icon}
               <SidebarLabel>
                   {item.title}
               </SidebarLabel>
            </div>
            <div>
                {item.subNav || subnav ? 
                item.IconOpen 
                : item.subnav? 
                item.IconClosed:null}
            </div>
        </Sidebarlink>
        {subnav && item.subNav.map((item,index)=>{
            return(
                <DropdownLink to={item.link} key={index}>
                    {item.Icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
        </>
    )
}

export default Submenu;