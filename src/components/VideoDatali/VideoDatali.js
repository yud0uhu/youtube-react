import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const VideoDatali = () => {
    const location = useLocation()
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get('v') //idはv=という形でurlに含まれているので
        console.log(location)
        console.log('id',id) //クエリーパラメータとして渡している動画のID
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>

        </div>
    )
}

export default VideoDatali