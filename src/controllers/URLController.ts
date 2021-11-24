import { Request, Response } from 'express'
import { generate as generateId } from 'shortid'

import { URLModel } from '@/database/model/URL'

class URLController {

  // conferir se a url ainda não foi registrada
  // criar um hash para essa URL
  // salvar a url no db
  // retornar a url
  public shorten = async (req: Request, res: Response): Promise<void> => {
    const { originURL } = req.body

    let url = await URLModel.findOne({ originURL })

    if (!url) {
      const hash = generateId()
      const shortURL = `${process.env.API_URL}/${hash}`
  
      url = await URLModel.create({ originURL, shortURL, hash })
    }

    res.json(url)
  }

  // pegar o hash da url
  // encontrar a url original pelo hash
  // redirecionar para a url orginal 
  public redirect = async (req: Request, res: Response): Promise<void> => {
    const { hash } = req.params

    const url = await URLModel.findOne({ hash })

    if (!url) {
      res.status(400).json({ error: 'URL not found' })
      return
    }

    res.redirect(url.originURL)
  }
}

export const urlController = new URLController()
