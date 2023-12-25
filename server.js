import app from './app.js';
import mongoose from 'mongoose';

const DB_HOST='mongodb+srv://Yuliia:b5HS0FLvDMN283o5@cluster0.0xerkey.mongodb.net/db-contacts?retryWrites=true&w=majority';

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000")
  })
})
.catch(eroor => {
console.log(error.message);
process.exit(1);
})




// b5HS0FLvDMN283o5-password



// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
