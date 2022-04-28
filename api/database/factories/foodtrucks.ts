import Foodtruck from 'App/Models/Foodtruck'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Foodtruck, ({ faker }) => {
  const foodtruck = {
    id: faker.datatype.number(9999),
    name: faker.company.companyName(),
    password: faker.internet.password(20),
    remember_me_token: undefined,
  }

  console.log(`"${foodtruck.name}": "${foodtruck.password}"`)

  return foodtruck
}).build()
