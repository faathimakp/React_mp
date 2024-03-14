import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
      <div className='row p-5 shadow'>
        <div className='col d-flex flex-column justify-content-center'>
          <h1>Media Player 2k24</h1>
          <p>Explore media player for youtube video upload and management. you can add and manage videos,categories and even check watch history </p>
        <div>
          <Link to={'/dash'} className='btn btn-success'>Explore</Link>
        </div>
        </div>
       <div className='col'>
<img src="https://staticg.sportskeeda.com/editor/2022/04/6ab9c-16497624720664-1920.jpg" className='img-fluid shadow' alt="img" />

       </div>
      </div>
    </div>
    <div className='mt-3 p-5'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex mt-2 flex-row justify-content-between'>
      <div className="card" style={{width: '18rem'}}>
  <img src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" style={{height:"300px"}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Upload wideos</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src="https://media0.giphy.com/media/H1wqJrR0sB05orGMGX/200w.gif?cid=82a1493bde19nbjeko5irwpbtks918fbetzsesg9ye84s49l&ep=v1_gifs_related&rid=200w.gif&ct=g"style={{height:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Watch videos</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" style={{width:'18rem'}}>
  <img src="https://media.sheerluxe.com/KXYpyoH62iK2NcLit7yvhdq6lts=/400x400/smart/https%3A%2F%2Fsheerluxe.com%2Fsites%2Fsheerluxe%2Ffiles%2Farticles%2F2020%2F12%2Fnew-december-what-watch-online-1.gif?itok=3vWeNX8y"style={{height:"300px"}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">View history</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

      </div>

    </div>
    <div className='mt-5 d-flex justify-content-center align-items-center p-5'>
   <div className='col'>
    <h2>Simple, Fast & Secured</h2>
    <p style={{textAlign:"justify"}}> Media player 2024 is a platform for simple and faster youtube video uploading and management video watch history too where you get a simple video player interface with the app itself....
    </p>
   </div>
   <div className='col p-5' >
   <iframe width="560" height="315" src="https://www.youtube.com/embed/id848Ww1YLo" title="Manjummel Boys - Trailer | Chidambaram | Soubin Shahir, Sreenath Bhasi | Sushin Shyam | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
    </div>
    </>
  )
}

export default Landing