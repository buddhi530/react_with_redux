import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAlbums } from "../redux/album/albumAction";

export default function AlbumList(){

const {loading,albums,error} = useSelector((state)=> state.album)    
const dispatch = useDispatch();

useEffect(()=>{
dispatch(fetchAlbums());
},[dispatch])

if(loading) return <div>Loading ...</div>
return (
    <div>
        
        <div>
            {albums.map(a=>(
            <div key ={a.id}>{a.title}</div>
            
            ))}
        </div>
    </div>
)
}