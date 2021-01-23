import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import ReactPlayer from 'react-player/lazy'

const ToolItems = (props) => {
    const toolItems = props.toolArray.map((item) => {
                const toolItem = item.tool.map(tool => {
                    let newItem = tool
                    
                const videos = tool.videos.map(video => {
                    if(video !== undefined) {
                        return (
                            <ReactPlayer
                            className='video-3-player'
                            url={video}
                            playing={false}
                            controls={true}
                            width='100%'
                            />
                            )
                        }
                        else {
                            return;
                        }
                })
        let images = tool.images.map(image => {
            return (
                <div>
                    <img src={image} alt={tool.toolName} />
                </div>
            )
        })
        return (
            <div className='photoboat'>
            
            <div className='photoboat-header'>
                <h4>{newItem.toolName}</h4>
                <Carousel showArrows={true} infiniteLoop showThumbs={false} className={newItem.videos.length > 0 ? 'tools-carousel' : ''} style={{}}>
                    {videos}
                    {images}
                </Carousel>
                </div>
                <div className="header-info">
                            <p>{newItem.description}</p>
                            <ul>
                            {newItem.li.length ? newItem.li.map((li, index) => {
                                    return <li key={index*2}>{li}</li>
                                }) : ''}
                            </ul>
                        </div>
        </div>
        )
    })
        return toolItem
    })
    
    return toolItems
}

export default ToolItems