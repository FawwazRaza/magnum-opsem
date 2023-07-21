import * as React from 'react';
import { useNavigate } from 'react-router-dom';
function HOME(){
const navigate=useNavigate();
    function handelclick()
    {
        navigate('/location');
    }
    return(
        <>
        <h1>Home</h1>
        <button onClick={handelclick}>location</button>
        </>
    )
}
export default HOME;