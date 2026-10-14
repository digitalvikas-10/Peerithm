import express from "express";
import cookieParser from "cookie-parser";

const app = express();



app.use(express.json());
app.use(cookieParser());


// routers
import authRouter from './routes/auth.routes.js'


app.get('/', (req, res) => {
  res.send('Hello Users');
})


// USE ROUTES
app.use('/api/auth', authRouter)



export default app;