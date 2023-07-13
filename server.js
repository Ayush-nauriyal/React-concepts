const port =8000
const express =require ('express')
const cors=require('cors')
const app =express()
app.use(express.json())
app.use(cors())

const API_KEY='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'

app.post('/completions',async(req,res)=>{
    const options={
        method:"POST",
        headers:{
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role:"user",content:"how are you"}],
            max_tokens:100,
        })
    }
    try{
  const response =await fetch('https://api.openai.com/v1/chat/completions',options)
  const data =await response.json()
  res.send(data);
    }
    catch(e)
    {
        console.log(e);

    }
})

app.listen(port, () =>console.log('listening on port'+port));