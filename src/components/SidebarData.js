import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { DiCodeigniter } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { AiFillFileAdd } from 'react-icons/ai';
import { IoIosColorPalette } from 'react-icons/io';
import { BsBorderInner } from 'react-icons/bs';
import { RxMargin } from 'react-icons/rx';
import { BsGrid1X2Fill } from 'react-icons/bs';
import { CgDisplayFullwidth } from 'react-icons/cg';
export const SidebarData = [
  {
    title: 'Introduction',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Syntax',
    path: '/Syntax',
    icon: <DiCodeigniter />,
    cName: 'nav-text'
  },
  {
    title: 'AddCss',
    path: '/addCss',
    icon: <AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Color',
    path: '/color',
    icon: <IoIosColorPalette />,
    cName: 'nav-text'
  },
  {
    title: 'Border',
    path: '/border',
    icon: <BsBorderInner />,
    cName: 'nav-text'
  },
  {
    title: 'Margin',
    path: '/margin',
    icon: <RxMargin />,
    cName: 'nav-text'
  },
  {
    title: 'Display',
    path: '/display',
    icon: <CgDisplayFullwidth />,
    cName: 'nav-text'
  },
  {
    title: 'Position',
    path: '/position',
    icon: <BsGrid1X2Fill />,
    cName: 'nav-text'
  }
];
