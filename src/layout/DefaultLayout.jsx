import React from 'react'
import GlobalHeader from 'components/GlobalHeader'

const DefaultLayout = (props) => {
  return (
    <div className="default-layout">
      <GlobalHeader />
      <main className="body-wrapper">
        { props.children }
      </main>
    </div>
  )
}

export default DefaultLayout
