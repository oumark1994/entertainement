import { Chip } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
    selectedGenres,setSelectedGenres,genres,setGenres,type,setPage
}) => {
  const handleAdd =(genre) =>{
    setSelectedGenres([...selectedGenres,genre]);
    setGenres(genres.filter((g)=>g.id !== genre.id));
    setPage(1);
  };
  const handleRemove =(genre) =>{
    setSelectedGenres(selectedGenres.filter((selected)=>selected.id !== genre.id));
    setGenres([...genres,genre]);
    setPage(1);
  };
    const fetchGenres = async () =>{
     const {data} =await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  setGenres(data.genres);
    };
    console.log(genres)
    useEffect(()=>{
        fetchGenres();
        return ()=>{
            setGenres({})
        };
    },[]);
  return (
    <div style={{padding:'6px 0'}}>
      {selectedGenres && selectedGenres.map((genre)=><Chip label={genre.name} size="small" style={{margin:2}} color="primary" onDelete={()=>handleRemove(genre)} key={genre.id} clickable/>)}
      {genres && genres.map((genre)=><Chip label={genre.name} size="small" onClick={()=>handleAdd(genre)} style={{margin:2}} key={genre.id} clickable/>)}

    </div>
  )
}

export default Genres