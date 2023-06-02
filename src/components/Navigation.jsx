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
        <a href="#timeline"><LuCalendarClock /></a>
        <a href="#personal_work"><MdWork /></a>
        <a href="#contact"><RiContactsLine /></a>
    </nav>
  )
}
