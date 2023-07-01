const express = require('express')

// Функция возвращает список товаров
// Пока фейковый
function getItemsList() {

  // вспомогательная функция, заворачивает данные
  const item = (name, description) => {
    return { name, description }
  }

  return {
    item_a: item('первая штука', 'хорошая штука недорого'),
    item_2: item('первая штука', 'хорошая штука недорого'),
    item_5: item('первая штука', 'хорошая штука недорого'),
    item_7: item('первая штука', 'хорошая штука недорого'),
    item_b: item('вторая штука', 'дорогая штука 300$'),
  }
}

function main() {
  const app = express()
  const port = 3000

  app.use('/' ,express.static(__dirname + '/static'))

  app.get('/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(getItemsList(), null, 3));
    //res.send(getItemsList())
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

main();
