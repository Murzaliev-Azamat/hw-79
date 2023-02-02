import express from 'express';
import {Place, PlaceWithoutId} from "../types";
import mysqlDb from "../mysqlDB";
import {OkPacket} from "mysql2";

const placesRouter = express.Router();

placesRouter.get('', async (req, res) => {
  const connection = mysqlDb.getConnection();
  const result = await connection.query('SELECT id, name FROM places');
  const places = result[0] as Place[];

  res.send(places);
});

placesRouter.get('/:id', async (req, res) => {
  const connection = mysqlDb.getConnection();
  const result = await connection.query(
    'SELECT * FROM places WHERE id = ?',
    [req.params.id]
  );
  const places = result[0] as Place[];
  const place = places[0];

  if(!place) {
    return res.status(404).send({error: 'Not Found'});
  }

  res.send(place);
});

placesRouter.post('', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({error: 'Поле сообщение отсутствует'});
  }

  const placeData: PlaceWithoutId = {
    name: req.body.name,
    description: req.body.description,
  };

  const connection = mysqlDb.getConnection();

  const sql = connection.format(
    'INSERT INTO places (name, description) VALUES (?, ?)',
    [placeData.name, placeData.description]
  );

  console.log(sql)

  const result = await connection.query(sql);

  const info = result[0] as OkPacket;

  res.send({
    ...placeData,
    id: info.insertId,
  });
});


export default placesRouter;
