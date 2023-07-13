import React from 'react'
const App=()=> {

  const getMessages =async () =>{

    const options={
      method :"POST",
      body :JSON.stringify({
        message:" hello how are you?",
      }),
      headers:{
        "Content-Type": "application/json",
      }

    }
    try{
      const response=await fetch('http://localhost:8000/completions',options)
      const data= await response.json()
      console.log(data)
    }
    catch(err)
    {
      console.log(err)
    }
    

  }
  return (
    <>
    <div className="app">
      <section className="side-bar">
   <button>+ New Chat    </button>
   <ul className="history">
    <li>ayush</li>
    </ul>

    <nav>
      <p>made for fun</p>
    </nav>
      </section>




      <section className="main">
     <h1> Mygpt</h1>
     <ul className="feed">

     </ul>
     <div className="bottom-section">
      <div className="input-container">
        <input/>
      <div id="submit" onClick={getMessages}>➢</div>
      </div>
      <p className="info">
        An experiment with open ai api
      </p>
     </div>
      </section>
    </div>
    </>
  )
}

export default App