import React from 'react'
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
// import * as RiIcons from 'react-icons/ri'

export const sidebardata = [
    {
        title : "Home",
        link  : "/Home", 
        Icon : <AiIcons.AiFillHome />,
        IconClosed : <RiIcons.RiArrowDownSFill />,
        IconOpen : <RiIcons.RiArrowUpSFill/>,
        cName : 'nav-text'
    },
    {
        title : "HTML",
        link  : "/html", 
        Icon : <AiIcons.AiFillHtml5 />,
        cName : 'nav-text',
        IconClosed : <RiIcons.RiArrowUpSLine />,
        IconOpen : <RiIcons.RiArrowDownSFill/>,
        subNav: [
            {
                title:"HTML1",
                link:'/html',
                Icon:<AiIcons.AiOutlineHtml5/>
            },
            {
                title:"HTML2",
                link : "/html2",
                Icon:<AiIcons.AiOutlineHtml5/>
            }
        ]
    },
    {
        title : "CSS",
        link  : "/css", 
        Icon : <IoIcons.IoLogoCss3 />,
        cName : 'nav-text',
        IconClosed : <RiIcons.RiArrowUpSLine />,
        IconOpen : <RiIcons.RiArrowDownSFill/>,
        subNav: [
            {
                title:"css1",
                link:'/css1',
                Icon:<AiIcons.AiOutlineHtml5/>
            },
            {
                title:"css2",
                link : "/css2",
                Icon:<AiIcons.AiOutlineHtml5/>
            }
        ]
    },
    {
        title : "Javascript",
        link  : "/javascript", 
        Icon : <IoIcons.IoLogoJavascript />,
        cName : 'nav-text',
        IconClosed : <RiIcons.RiArrowUpSLine />,
        IconOpen : <RiIcons.RiArrowDownSFill/>,
        subNav: [
            {
                title:"Js1",
                link:'/Js1',
                Icon:<AiIcons.AiOutlineHtml5/>
            },
            {
                title:"Js2",
                link : "/Js2",
                Icon:<AiIcons.AiOutlineHtml5/>
            }
        ]
    }


]
