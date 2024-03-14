import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApi'
import { useState } from 'react'

function Videos(addStatus) {

  const[allVideos,setAllVideos]=useState([])
  const[delStatus,setDelStatus]=useState([])

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])
  const getData=async()=>{
    const res=await getVideos()
    setAllVideos(res.data)
  }
  return (
    <div className='bg-light border border-3 border-dark p-5'>
      {
        allVideos?
        allVideos.map(item=>(
          <VideoCard video={item} setDelStatus={setDelStatus}/>
        ))
      :
      <h1>No videos</h1>
        }
    </div>
  )
}

export default Videos
