import mongoose from 'mongoose'

mongoose.set('debug', true);

class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(`${process.env.MONGO_CONNECTION_URI}`)
			console.log('📅 Database connected')
		} catch (error) {
			console.error(error)
			process.exit(1)
		}
	}
}

export const mongoConnection = new MongoConnection()
