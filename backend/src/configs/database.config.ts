import mongoose, { ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    const mongoUri = process.env.MONGO_URI;
    console.log('MONGO_URI:', mongoUri);  // Выводим значение MONGO_URI для проверки
    if (!mongoUri) {
        throw new Error('MONGO_URI is not defined');
    }
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions).then(
        () => console.log("Connected successfully"),
        (error) => console.error("Connection error: ", error)
    );
};
