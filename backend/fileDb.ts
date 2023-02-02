// import { promises as fs } from 'fs';
// import {randomUUID} from "crypto";
// import {Category, PlacesWithoutId} from "./types";
//
// const filename = './db.json';
// let data: Category[] = [];
//
// const fileDb = {
//   async init() {
//     try {
//       const fileContents = await fs.readFile(filename);
//       data = JSON.parse(fileContents.toString());
//     } catch (e) {
//       data = [];
//     }
//   },
//
//   async getItems() {
//     return data;
//   },
//
//   async addItem(item: PlacesWithoutId) {
//     const id = randomUUID();
//     const category = {
//       id: id,
//       ...item,
//     }
//     data.push(category);
//     await this.save();
//     return category;
//   },
//
//   async save() {
//     await fs.writeFile(filename, JSON.stringify(data));
//   }
// };
//
// export default fileDb;