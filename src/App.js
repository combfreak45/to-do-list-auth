import { useEffect, useState } from "react";
import ToDo from "./Components/ToDo";
import {GrAddCircle} from 'react-icons/gr'
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const q = query(collection(db,'todos'))
        const d = onSnapshot(q,(querySnap)=>{
            let arr = []
            querySnap.forEach((doc)=>{
                arr.push({...doc.data(),id:doc.id})
            })
            setData(arr);
        })
        return () => d()
    },[])
 return (
   <div className="bg-black min-h-screen min-w-screen py-[10rem] pl-[25rem] ">
     <div className="bg-white w-[30rem] min-h-[20rem] rounded-3xl p-11 flex flex-col gap-9">
       <div className=" h-[3rem]  text-center text-2xl p-2 font-extrabold">
         TO DO LIST
       </div>
       <div className="bg-black h-[4em] rounded-3xl text-white text-center text-xl p-6 flex gap-10">
         <input
           type="text"
           placeholder="ADD TASK"
           className="h-[2rem] rounded-lg text-black p-3"
         />
         <button>
           <GrAddCircle className="w-[2rem] h-[2rem] bg-white rounded-2xl" />
         </button>
       </div>
       <div className="bg-black min-h-[10rem] rounded-3xl p-5 flex flex-col gap-5">
         {data.map((value,index) => (
           <ToDo key={index} value={value} />
         ))}
       </div>
     </div>
   </div>
 );
}

export default App;
