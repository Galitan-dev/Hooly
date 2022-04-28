import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Foodtruck from 'App/Models/Foodtruck'

export default class Foodtrucks {
  public async create({ request, auth, response }: HttpContextContract) {
    const payload = await request.validate({
      schema: schema.create({
        name: schema.string([
          rules.minLength(5),
          rules.maxLength(50),
          rules.unique({
            table: 'foodtrucks',
            column: 'name',
          }),
        ]),
        password: schema.string([
          rules.confirmed('confirmPassword'),
          rules.minLength(4),
          rules.maxLength(50),
        ]),
        rememberMe: schema.boolean(),
      }),
      messages: {
        required: 'The {{ field }} is required to create a new foodtruck.',
        unique: 'This foodtruck already exists.',
        confirmed: 'The passwords do not match.',
      },
    })

    const foodtruck = await Foodtruck.create({
      name: payload.name,
      password: payload.password,
      remember_me_token: await Hash.make(payload.password),
    })

    try {
      await auth.use('web').loginViaId(foodtruck.id, payload.rememberMe)
    } catch (err) {
      console.error(err)
      return response.internalServerError('Foodtruck created, but failed to authenticate.')
    }

    return 'Foodtruck sucessfully created!'
  }

  public async me({ auth, response }: HttpContextContract) {
    const foodtruck = await auth.use('web').authenticate()

    response.json({
      name: foodtruck.name,
      id: foodtruck.id,
    })
  }
}
