import MTProto from '@mtproto/core';
import { resolve } from 'path';


const api_id = process.env.TELEGRAM_API_ID || 'YOUR_TELEGRAM_API_ID';
const api_hash = process.env.TELEGRAM_API_HASH || 'YOUR_TELEGRAM_API_HASH';

const api = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: resolve('../data/db.json'),
  },
});


export default api