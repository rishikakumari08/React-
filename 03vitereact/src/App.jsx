import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
function App() {
  // const [username, setUsername] = useState('')
  // const submitHandler=(e)=>{
  //   e.preventDefault();
  //   console.log(`username is ${username}`);
  //   setUsername('')
  // }

  // const [data, setdata] = useState([]);

  // const getData = async () => {
  //   const response = await axios.get("https://picsum.photos/v2/list");
  //   setdata(response.data);
  // };

  // // now the getData function will run only once when the component is mounted and not on every re-render
  // useEffect(()=>{
  //    getData();
  // },[])

  return (
    <>
      {/* <div  className='w-full min-h-screen bg-zinc-900 px-5 py-2'>
      <form
      onSubmit={(e)=>submitHandler(e)}
      >
        <input
         className='w-80 outline-none border-1 border-zinc-400 px-3 py-2 mr-3 bg-zinc-300 rounded-md'
         
         onChange={(e)=>{
            setUsername(e.target.value)
         }}
         value={username}
          type="text" 
          placeholder='Text' 
          />
        <button  className='outline-none bg-blue-600 px-3 py-2 rounded-md'>submit</button>
      </form>
    </div> */}
      {/* <div className="p-10">
        <button
          onClick={getData}
          className="bg-blue-500 text-white font-semibold text-2xl px-6 py-3 rounded-xl active:scale-70"
        >
          Get data
        </button>
        <div className="p-5 bg-gray-950 rounded-md text-white mt-4">
          {data.map((elem) => {
            return (
              <div key={elem.id} className="p-4 bg-gray-800 rounded-lg mt-2">
                <h2 className="text-xl font-bold">{elem.author}</h2>
                <img
                  src={elem.download_url}
                  alt="Random"
                  className="w-full h-40 object-cover rounded-md mt-2"
                />
              </div>
            );
          })}
        </div>
      </div> */}
      <Nav/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
