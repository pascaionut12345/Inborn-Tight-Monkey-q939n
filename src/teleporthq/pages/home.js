import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Inborn Tight Monkey</title>
        <meta property="og:title" content="Inborn Tight Monkey" />
      </Helmet>
    </div>
  )
}

export default Home
