import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'à propos de moi',
        path: '/about-me',
    },
    {
        title: 'contact',
        path: '/contact',
    },
    {
    title: 'travaux',
    path: '/work',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: '80Cipper',
            path: '/works/works1',
            icon: <IoIcons.IoMdPhotos />,
        },
        {
            title: 'Adidas',
            path: '/works/works2',
            icon: <IoIcons.IoMdPhotos />,
        },
        {
            title: 'Nike',
            path: '/works/works3',
            icon: <IoIcons.IoMdPhotos />,
        },
    ]
},
]