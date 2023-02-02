import express from 'express';
import {Category, CategoryWithoutId, ItemWithoutId} from "../types";
import {imagesUpload} from "../multer";
import mysqlDb from "../mysqlDB";
import {OkPacket} from "mysql2/index";
import categoriesRouter from "./categories";

const itemsRouter = express.Router();

// categoriesRouter.get('', async (req, res) => {
//   const connection = mysqlDb.getConnection();
//   const result = await connection.query('SELECT id, name FROM categories');
//   const categories = result[0] as Category[];
//
//   res.send(categories);
// });
//
// categoriesRouter.get('/:id', async (req, res) => {
//   const connection = mysqlDb.getConnection();
//   const result = await connection.query(
//     'SELECT * FROM categories WHERE id = ?',
//     [req.params.id]
//   );
//   const categories = result[0] as Category[];
//   const category = categories[0];
//
//   if(!category) {
//     return res.status(404).send({error: 'Not Found'});
//   }
//
//   res.send(category);
// });
//
// // categoriesRouter.post('', imagesUpload.single('image'), async (req, res) => {
// categoriesRouter.post('', async (req, res) => {
//   if (!req.body.name) {
//     return res.status(400).send({error: 'Поле сообщение отсутствует'});
//   }
//
//   const categoryData: CategoryWithoutId = {
//     name: req.body.name,
//     description: req.body.description,
//     // image: req.file ? req.file.filename : null,
//   };
//
//   const connection = mysqlDb.getConnection();
//
//   const sql = connection.format(
//     'INSERT INTO categories (name, description) VALUES (?, ?)',
//     [categoryData.name, categoryData.description]
//   );
//
//   console.log(sql)
//
//   const result = await connection.query(sql);
//
//   const info = result[0] as OkPacket;
//
//   res.send({
//     ...categoryData,
//     id: info.insertId,
//   });
// });

export default itemsRouter;
