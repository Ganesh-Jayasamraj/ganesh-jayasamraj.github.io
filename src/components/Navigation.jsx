import React from 'react'
import './Navigation.css'

import { AiOutlineHome } from 'react-icons/Ai'
import { FiBook } from 'react-icons/Fi'
import { LuCalendarClock } from 'react-icons/Lu'
import { MdWork } from 'react-icons/Md'
import { RiContactsLine } from 'react-icons/ri'

export const Navigation = () => {
  return (
    <nav>
        <a href="#"><AiOutlineHome/></a>
        <a href="#learnings"><FiBook /></a>
        <a href="#Timeline"><LuCalendarClock /></a>
        <a href="#Personal_work"><MdWork /></a>
        <a href="#Contact"><RiContactsLine /></a>
    </nav>
  )
}
