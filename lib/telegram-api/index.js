import api from './api.js'
import auth from './auth.js';

export default class TelegramApi {
  constructor (phone, code) {
    (async () => this.user = await auth(phone, code))()
    this.call = api.call
  }
}