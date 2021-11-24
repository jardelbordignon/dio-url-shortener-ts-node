import { Router } from 'express'

import { urlRoutes } from './urlRoutes'

const routes = Router()

routes.use(urlRoutes)

export { routes }
