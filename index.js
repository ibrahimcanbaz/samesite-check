const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    const cookie = 'user=can; samesite=none; secure';
    res.setHeader('set-cookie', [cookie]);
    res.send('ok')
  })

  app.get('/check', (req, res) => {
    const cookie = req.headers.cookie;
    if (cookie) {
        res.send('successs');
    } else {
        res.sendStatus(403);
        res.end();
    }
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})