import mongoose from 'mongoose';

const connectDB = (uri) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit the process with failure
    });
};

export default connectDB;
