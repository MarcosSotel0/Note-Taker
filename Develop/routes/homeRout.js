const express = require('express');
const homeRout = express();

const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
} = require('../../lib/zookeepers');

const { zookeepers } = require('../../data/zookeepers');

homeRout.get('/', (req, res) => {
  let results = zookeepers;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

homeRout.get('/:id', (req, res) => {
  const result = findById(req.params.id, zookeepers);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

homeRout.post('/', (req, res) => {
  req.body.id = zookeepers.length.toString();

  if (!validateZookeeper(req.body)) {
    res.status(400).send('The zookeeper is not properly formatted.');
  } else {
    const zookeeper = createNewZookeeper(req.body, zookeepers);
    res.json(zookeeper);
  }
});

module.exports = homeRout;
