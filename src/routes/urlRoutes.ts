import { Router } from 'express'

import { urlController } from '@/controllers'

const urlRoutes = Router()

urlRoutes.post('/shorten', urlController.shorten)
urlRoutes.get('/:hash', urlController.redirect)

export { urlRoutes }
