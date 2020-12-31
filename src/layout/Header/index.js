import React from 'react'
import headStyle from './style/header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <section id={headStyle.headCont}>
      <header>
        <div className={headStyle.brand}>
          <Link href="/">
            <h3>Year in Review Gallery</h3>
          </Link>
        </div>
        <div className={headStyle.navLinks}>
          <ul>
            <Link href="/about">
              <li>Contribute</li>
            </Link>
          </ul>
        </div>
      </header>
      <div className={headStyle.hero}>
        <p className={headStyle.h2}>Hey there, You are Awesome!</p>
      </div>
    </section>
  )
}

export default Header
