import express from 'express';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs')

// TODO: Way around for __dirname in ES6
const __filename = fileURLToPath(import.meta.url); //* get the resolved path to the file
const __dirname = path.dirname(__filename); //* get the name of the directory


app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get("/rest/hello", (req, res) => {
    res.status(200).json({
        message: "Hello Mama!"
    })
})

app.use((req, res, next) => {
    if (req.url.includes('rest'))
        res.render('error', { message: "Something went wrong!", status: 500 })
    else
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
})


app.listen(8080, () => {
    console.log("App is running!")
})