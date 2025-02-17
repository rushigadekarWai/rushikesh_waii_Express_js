const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    // res.send('hello world');
    res.sendFile(path.join(__dirname, 'pages/index.html'));
})

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server running  http://localhost:${port}`)
});