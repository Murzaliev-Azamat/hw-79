import path from "path";

const rootPath = __dirname;

const config = {
  rootPath,
  publicPath: path.join(rootPath, 'public'),
  db: {
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'azamat_hw_79'
  }
};

export default config;