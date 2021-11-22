import TelegramApi from '../lib/telegram-api';

describe('Test TelegramApi', () => {
  const api = new TelegramApi()
  test('returns authorized user', () => {
    console.log(api.user);
    // expect(api.user).toBe(3);
  });
})