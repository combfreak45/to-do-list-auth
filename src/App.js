import { useEffect, useState } from "react";
import ToDo from "./Components/ToDo";
import {GrAddCircle} from 'react-icons/gr'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
    const [data, setData] = useState([]);
    const [input,setInput] = useState('')
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

    const toggleComponent = async (value) => {
                await updateDoc(doc(db,'todos',value.id),{
                  completed: !value.completed
                })
    }

   const createTodo = async (e) =>{
        e.preventDefault(e)
        if(input===''){
          alert('enter the value')
          return
        }
        await addDoc(collection(db,'todos'),{
          text: input,
          completed: false,
        })
        setInput('')
   }

   const deleteTodo = async(id)=>{
    await deleteDoc(doc(db,'todos',id))
   }
 
 return (
   <div className="bg-black min-h-screen min-w-screen py-[10rem] pl-[25rem] ">
     <div className="bg-white w-[30rem] min-h-[20rem] rounded-3xl p-11 flex flex-col gap-9">
       <div className=" h-[3rem]  text-center text-2xl p-2 font-extrabold">
         TO DO LIST
       </div>
       <form className="bg-black h-[4em] rounded-3xl text-white text-center text-xl p-6 flex gap-10" onSubmit={createTodo}>
         <input
           type="text"
           placeholder="ADD TASK"
           className="h-[2rem] rounded-lg text-black p-3"
           value={input}
           onChange={(e)=>setInput(e.target.value)}
         />
         <button>
           <GrAddCircle className="w-[2rem] h-[2rem] bg-white rounded-2xl" />
         </button>
       </form>
       <div className="bg-black min-h-[10rem] rounded-3xl p-5 flex flex-col gap-5">
         {data.map((value,index,) => (
           <ToDo key={index} value={value} toggleComponent={toggleComponent} deleteTodo={deleteTodo}/>
         ))}
       </div>
     </div>
   </div>
 );
}

export default App;
