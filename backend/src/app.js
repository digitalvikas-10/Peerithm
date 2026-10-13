import express from "express";

const app = express();



app.use(express.json());

// routers
import authRouter from './routes/auth.routes.js'


app.get('/', (req, res) => {
  res.send('Hello bank Users');
})


// USE ROUTES
app.use('/api/auth', authRouter)



export default app;