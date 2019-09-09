import { useEffect, useState } from 'react'

const useSliderAutoScroll = (width, images) => {
  const AUTO_SCROLL_INTERVAL = 3000
  let scrollInterval = null
  let scrollRef = null
  const [scrollX, setScrollX] = useState(0)

  const setScrollRef = (value) => {
    scrollRef = value
  }

  startScroll = () => {
    if(scrollRef) {               
      scrollInterval = setInterval(() => {
        if(scrollRef) {                    
          if((scrollX + 100) < (width * (images.length - 1))) {                       
            scrollRef.scrollTo({x: scrollX + width, y: 0, animated: true})            
          } else {
            scrollRef.scrollTo({x: 0, y: 0, animated: true})
          }          
        }                
      }, AUTO_SCROLL_INTERVAL)
    }    
  }

  stopScroll = () => {
    if(scrollInterval) {
      clearInterval(scrollInterval)
    }
  }

  useEffect(() => {
    startScroll()
    return stopScroll
  })

  return [setScrollX, setScrollRef, stopScroll, startScroll]
}

export {
  useSliderAutoScroll
}