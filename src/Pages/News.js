import React, { useEffect } from 'react'

const News = () => {

    document.title = "News"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div>News</div>
  )
}

export default News