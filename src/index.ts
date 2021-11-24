import express from 'express'
import 'dotenv/config'

import { routes } from './routes'
import { mongoConnection } from '@/database/MongoConnection'

mongoConnection.connect()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('🚀 Server running'))
