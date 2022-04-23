import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class Auth {
  public async login({ request, auth, response }: HttpContextContract) {
    const credentials = await request.validate({
      schema: schema.create({
        name: schema.string(),
        password: schema.string(),
        rememberMe: schema.boolean(),
      }),
    })

    try {
      await auth.use('web').attempt(credentials.name, credentials.password, credentials.rememberMe)
    } catch (err) {
      console.error(err)
      return response.unauthorized('Invalid credentials')
    }

    return 'Sucessfully logged in'
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('web').logout()
    return 'Successfully logged out'
  }
}
