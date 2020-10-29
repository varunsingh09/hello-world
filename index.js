const express = require('express')
const app = express()
const port = 3005

app.get('/', function (req, res) {
  res.status(200).json({
      hello: 'Hello word',
  });
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
