import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import userRoute from './modules/user/user.route';
import routes from './modules/routes';

const app = express();


app.use(cors())
app.use(express.json())


app.use(routes)

app.get('/', (req, res) => {
    res.send({ success: true, message: 'I am Here to send in data' })
})





app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})



async function server() {
    try {
        // console.log(config)
        await mongoose.connect(config.database_url!);


        console.log(`Connected to database ${5000}`);
    } catch (error) {
        console.log(`server error ${error}`);
    }
}

server()