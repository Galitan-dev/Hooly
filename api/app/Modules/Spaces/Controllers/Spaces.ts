import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Space from 'App/Models/Space'

export default class Spaces {
  public async get({ params, response }: HttpContextContract) {
    if (!params.id) {
      return response.json(await Space.all())
    }

    const space = await Space.find(params.id)
    if (space) {
      return response.json(space)
    }

    return response.notFound({
      code: 404,
      message: 'Space not found',
    })
  }
}
