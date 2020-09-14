const {Schema, model, Types} = require('mongoose')
const { check } = require('express-validator')


const schema = new Schema({
  name: {type: String, required: true},
  region: {type: String, required: true},
  star: {type: Number, required: true},
  price: {type: Number},
  maps: {type: String},
  vr: {type: String},
  photo: {type: Array},
  video: {type: Array},
  social: {
    vk: {type: String},
    ok: {type: String},
    fb: {type: String},
    phone: {type: String},
    url: {type: String},
  },
  check: {
    run: {type: Boolean, default: false}, //Маршруты для пеших прогулок
    sauna: {type: Boolean, default: false}, //Сауна
    fishing: {type: Boolean, default: false}, //Рыбная ловля
    riding: {type: Boolean, default: false}, //Верховная езда
    heat: {type: Boolean, default: false}, //Парная
    accessibly: {type: Boolean, default: false}, //Показать только доступные варианты
    allDay: {type: Boolean, default: false}, //Круглосуточная стойка регистрации
    freeCancel: {type: Boolean, default: false}, //Бесплатная отмена бронирования
    noCreditCard: {type: Boolean, default: false} //Бронирование без кредитной карты
  }
  // owner: {type: Types.ObjectId, ref: 'User'}
})


module.exports = model('Link', schema)
