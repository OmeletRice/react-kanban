import React from 'react'

const Default = (props) => {
  return (
    <div className="default-layout">
      <main className="body-wrapper">
        { props.children }
      </main>
    </div>
  )
}

export default Default
