import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Test',
        path: '/test',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
    },
    {
    title: 'Works',
    path: '/works',
    icon: <AiIcons.AiFillPicture />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'Work 1',
            path: '/works/works1',
            icon: <IoIcons.IoMdPhotos />,
        },
        {
            title: 'Work 2',
            path: '/works/works2',
            icon: <IoIcons.IoMdPhotos />,
        },
        {
            title: 'Work 3',
            path: '/works/works3',
            icon: <IoIcons.IoMdPhotos />,
        },
    ]
},
]