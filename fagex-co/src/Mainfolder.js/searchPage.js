
// import React,{useState} from "react";
// import data from '../dataBase/productsFile.json'

// function Search()
// {
//     const [message, se] = useState('');
//     const [updated, setUpdated] = useState(message);
//     const [changed,setchanged]=useState([]);
//     const handleChange = (event) => {
//       const value1= (event.target.value);
//     setUpdated(value1)
//     }
//     const handleClick = () => {
    
//       setUpdated(message);
//       const mess = updated.toLowerCase();
//     }
//       function searching(element)
//       {
//         if(element.name==updated)
//         {return element.name;}
//         // else if(element.profession==updated)
//         // {
//         //   return element.profession;
//         // }
//         // else if(element.price==updated)
//         // {return element.price;}
//         // else if(element.image==updated)
//         // {return element.image;}
//       }
 
    
//     function filterByID(item) {
//     if ((item?.firstname).toLowerCase().includes(updated.toLowerCase())) {
//       return true;
//     }
//     return false;
//     }
  
//     return(

//         <>
//          <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={message}
//         onChange={handleChange}
//       />


//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//         </>
//     )
// }
// export default Search;