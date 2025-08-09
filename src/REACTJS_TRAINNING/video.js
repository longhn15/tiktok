import video1 from './video/video-1.mp4'
import { forwardRef, useRef } from 'react'
import {useImperativeHandle} from 'react'


function Video(props, ref) {

    const videoRef = useRef()

    // thể hiện tính đóng gói chỉ đưa ra ngoài 2 hàm đó thôi
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef} 
            src={video1} 
            controls
        />
    )
}

export default forwardRef(Video)