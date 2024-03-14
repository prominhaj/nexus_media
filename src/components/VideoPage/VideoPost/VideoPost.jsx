import Post from '@/components/Posts/Post/Post';
import React from 'react';

// Videos
const videos = [
    {
        id: 1,
        videoUrl: "https://res.cloudinary.com/dccqjvrrk/video/upload/v1710446062/Nexus%20Media%20App/Videos/pexels-mikhail-nilov-7989667_Original_tbnhga.mp4",
    },
    {
        id: 2,
        videoUrl: "https://res.cloudinary.com/dccqjvrrk/video/upload/v1710446300/Nexus%20Media%20App/Videos/pexels-tea-oebel-6804117_Original_m6737h.mp4",
    },
    {
        id: 3,
        videoUrl: "https://res.cloudinary.com/dccqjvrrk/video/upload/v1710446317/Nexus%20Media%20App/Videos/pexels_videos_2480792_1080p_rrmapt.mp4",
    },
    {
        id: 4,
        videoUrl: "https://res.cloudinary.com/dccqjvrrk/video/upload/v1710446332/Nexus%20Media%20App/Videos/pexels_videos_2421545_2160p_ezncfw.mp4",
    },
    {
        id: 5,
        videoUrl: "https://res.cloudinary.com/dccqjvrrk/video/upload/v1710446370/Nexus%20Media%20App/Videos/video_2160p_w8exxi.mp4",
    },
]

const VideoPost = () => {

    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                videos.map(video => <Post key={video.id} video={video.videoUrl} />)
            }
        </div>
    );
};

export default VideoPost;