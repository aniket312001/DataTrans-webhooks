const express = require('express');
const app = express();
const cors = require('cors')

const port = 3000;


app.use(cors())

app.use(express.json())





app.post('/',(req,res)=>{
	console.log('Hello World')
	console.log(res)
	console.log(res.body)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});