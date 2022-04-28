import { BaseCommand } from '@adonisjs/core/build/standalone'
import execa from 'execa'
import FoodtruckFactory from 'Database/factories/foodtrucks'
import BookingFactory from 'Database/factories/bookings'

export default class DbFake extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'db:fake'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Reinitialize the database and fill it with fake data'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    await execa.node('ace', ['db:wipe'])
    await execa.node('ace', ['migration:run'])
    await execa.node('ace', ['db:seed'])

    await FoodtruckFactory.createMany(10)
    await BookingFactory.createMany(30)
  }
}
