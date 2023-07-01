const express = require('express')

// Функция возвращает список товаров
// Пока фейковый
function getItemsList() {

  // вспомогательная функция, заворачивает данные
  const item = (name, description, pic) => {
    return { name, description, pic: pic ?? 'img.png' }
  }

  return {
    item_1: item('Первый бобик', 'просто бобик. 230701', 'https://i.imgur.com/67eT7Jb.jpeg'),
    item_b: item('вторая штука', 'дорогая штука 300$'),
  }
}

function main() {
  const app = express()
  const port = process.env.PORT || 3000;

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
