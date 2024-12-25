import { Equip } from './base.js'

const equip = new Equip()
const equip2 = new Equip()

console.log(equip)
console.log(equip2)
equip._price = 1
console.log(equip.XX())
// equip.Price = 1
equip.name = 'test'
equip2.type = 'single'
console.log(equip)
console.log(equip2)

// console.log(c1)
// c1.a = 2
// c2()
// window.appSetting = 0
// setInterval(() => {
//   if (appSetting) {
//     console.log('123')
//     appSetting = 0
//   }
// }, 1000)
