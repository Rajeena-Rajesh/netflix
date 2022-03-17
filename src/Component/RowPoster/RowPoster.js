import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPoster(props) {

const [movies,setMovies]=useState([])
const [urlId,setUrlId]=useState('')

useEffect(()=>{
//   axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
//     console.log(response.data)
// setMovies(response?.data.results)
 //})
  axios.get(props.url).then((response)=>{
   console.log(response.data)
   setMovies(response.data.results)
    
  }).catch(err=>{
    alert('Network error')
  }) 
},[]) 



//useEffect(()=>{
  //console.log(movies)
   
  //},[movies])
const opts = {
 height: '390',
 width: '100%',
playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
const handleMovie = (id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results.length!=0){
     
      setUrlId(response.data.results[0])
    }else{
      console.log('Array Empty')
    }
  })
} 
  return (
    <div className='row'>
      <h2 >{props.title}</h2>
      <div className="posters">
        {movies.map((obj,index)=>(             //<img className='poster' alt='poster' src={`${imageUrl+obj.backdrop_path}`}
       <img key={index} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
        ))}                  
      </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key}/> }
  

    </div> 
  )
}

export default RowPoster
