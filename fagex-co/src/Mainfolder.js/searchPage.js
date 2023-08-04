
import React,{useState} from "react";
import data from '../dataBase/productsFile.json'

function Search()
{
    const [message, setmessage] = useState('');
    const [changed,setchanged]=useState([]);
    const handleChange = (event) => {
        setmessage(event.target.value)
        console.log(mess);
    }
    let mess;
    const handleClick = () => {
    
     mess = message.toLowerCase();
     console.log(data.categories[0].products[0].name);

        
    }
      function searching(element)
      {
        if(true)
        {
            var keys=Object.entries(data.categories)
console.log(keys[0][1]);
        }
        else if(false) 
        {
            console.log(data.categories.id)
               
        }
      }
 
    
    function filterByID(item) {
    if ((item?.categories).toLowerCase().includes(message.toLowerCase())) {
      return true;
    }
    return false;
    }
  
    return(

        <>
         <div>
      <input
       type="text"
        value={message}
        onChange={handleChange} />

<button onClick={handleClick}>sdsf</button>

      <ul>
        {data.categories.map((item) => {
            return(
                <>
                <li key={item.id}>{item.name}</li>
                </>
                
            );
            })}
      </ul>
    </div>
        </>
    )
}
export default Search;