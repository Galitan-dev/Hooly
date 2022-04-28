import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Booking from 'App/Models/Booking'
import Space from 'App/Models/Space'
import { DateTime } from 'luxon'

export default class Bookings {
  public async get({ params, request, auth, response }: HttpContextContract) {
    const search = new URLSearchParams(request.parsedUrl.query ?? '')

    if (!params.id)
      if (search.has('ofDay')) {
        if (!search.get('ofDay')!.match(/^\d\d\d\d-\d\d-\d\d$/g))
          return response.abort({
            code: 400,
            message: 'The `ofDay` param does not match the format `yyyy-MM-dd`',
          })

        const ofDay = DateTime.fromFormat(search.get('ofDay')!, 'yyyy-MM-dd')
        const bookings = await Booking.query().where('date', ofDay.toFormat('yyyy-MM-dd'))

        return response.json(
          bookings.map((b) => ({
            id: b.id,
            spaceId: b.spaceId,
            foodtruckId: b.foodtruckId,
            date: b.date.toFormat('yyyy-MM-dd'),
          }))
        )
      } else if (search.has('ofWeek')) {
        if (!search.get('ofWeek')!.match(/^\d\d\d\d-\d\d-\d\d$/g))
          return response.abort({
            code: 400,
            message: 'The `ofWeek` param does not match the format `yyyy-MM-dd`',
          })

        const ofWeek = DateTime.fromFormat(search.get('ofWeek')!, 'yyyy-MM-dd')
        const bookings = await Booking.query().whereBetween('date', [
          ofWeek.toFormat('yyyy-MM-dd'),
          ofWeek.plus({ days: 7 }).toFormat('yyyy-MM-dd'),
        ])

        return response.json(
          bookings.map((b) => ({
            id: b.id,
            spaceId: b.spaceId,
            foodtruckId: b.foodtruckId,
            date: b.date.toFormat('yyyy-MM-dd'),
          }))
        )
      } else {
        try {
          const foodtruck = await auth.use('web').authenticate()
          const bookings = await Booking.query().where('foodtruckId', foodtruck.id.toString())

          return response.json(
            bookings.map((b) => ({
              id: b.id,
              spaceId: b.spaceId,
              foodtruckId: b.foodtruckId,
              date: b.date.toFormat('yyyy-MM-dd'),
            }))
          )
        } catch {
          return response.abort({
            code: 400,
            message: 'Please provide and id or refer to the docs.',
          })
        }
      }

    const booking = await Booking.find(params.id)

    if (!booking) {
      return response.notFound({ code: 404, message: 'This booking does not exist!' })
    }

    return response.json({
      id: booking.id,
      spaceId: booking.spaceId,
      foodtruckId: booking.foodtruckId,
      date: booking.date.toFormat('yyyy-MM-dd'),
    })
  }

  public async ofDay({ request, response }: HttpContextContract) {
    const {
      params: { date },
    } = await request.validate({
      schema: schema.create({
        params: schema.object().members({
          date: schema.date({ format: 'yyyy-MM-dd' }),
        }),
      }),
    })

    const bookings = await Booking.query().where('date', date.toFormat('yyyy-MM-dd'))

    return response.json(bookings)
  }

  public async ofWeek({ request, response }: HttpContextContract) {
    const {
      params: { date },
    } = await request.validate({
      schema: schema.create({
        params: schema.object().members({
          date: schema.date({ format: 'yyyy-MM-dd' }),
        }),
      }),
    })

    const bookings = await Booking.query().whereBetween('date', [
      date.toFormat('yyyy-MM-dd'),
      date.plus({ days: 7 }).toFormat('yyyy-MM-dd'),
    ])

    return response.json(bookings)
  }

  public async remove({ params, auth, response }: HttpContextContract) {
    const foodtruck = auth.use('web').user!
    const booking = await Booking.query()
      .where('id', params.id)
      .andWhere('foodtruckId', foodtruck.id.toString())
      .limit(1)

    if (booking.length < 1) {
      return response.notFound({ code: 404, message: 'This booking does not exist!' })
    }

    return response.json(booking[0])
  }

  public async create({ request, auth, response }: HttpContextContract) {
    const form = await request.validate({
      schema: schema.create({
        space: schema.number(),
        date: schema.date({ format: 'yyyy-MM-dd' }, [rules.after('today')]),
      }),
    })

    const foodtruck = auth.use('web').user!
    const space = await Space.find(form.space)

    if (!space) {
      return response.notFound({ code: 404, message: 'This space does not exist!' })
    }

    // TODO highlight this masterpiece
    if (~space.days & Math.pow(16, 7 - form.date.weekday)) {
      return response.unauthorized({
        code: 400,
        message: 'This space is not open on ' + form.date.weekdayLong.toLowerCase() + 's.',
      })
    }

    const alreadyBooked = await Booking.query()
      .where('spaceId', space.id.toString())
      .andWhere('date', form.date.toFormat('yyyy-MM-dd'))

    if (alreadyBooked.length > 0) {
      return response.unauthorized({
        code: 400,
        message: 'This space is already booked at this date.',
      })
    }

    const dayBooked = await Booking.query()
      .where('foodtruckId', foodtruck.id)
      .andWhere('date', form.date.toFormat('yyyy-MM-dd'))

    if (dayBooked.length > 0) {
      return response.unauthorized({
        code: 400,
        message: 'You already booked a space at this date.',
      })
    }

    await Booking.create({
      foodtruckId: foodtruck.id,
      spaceId: space.id,
      date: form.date,
    })

    return 'Space successfuly booked!'
  }
}
