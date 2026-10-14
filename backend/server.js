import dotenv from 'dotenv';

import app from './src/app.js';
import connectDb from './config/db.js';

dotenv.config()

connectDb();


app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});


