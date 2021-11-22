import app from './app.js'
import setupBot from './lib/bot.js'

const port = process.env.PORT || 3000;

setupBot()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})