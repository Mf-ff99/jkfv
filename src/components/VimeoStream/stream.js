import React from 'react'

import './stream.css'

export default function Stream() {
      return (
      <div id='stream'>
            <iframe
                  id='vimeoLiveStream'
                  title='liveStream' 
                  src="https://vimeo.com/event/1349387/embed" 
                  frameborder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowfullscreen 
                  // style="position:absolute;top:0;left:0;width:100%;height:100%;"
            >
            </iframe>
      </div>
      )
}