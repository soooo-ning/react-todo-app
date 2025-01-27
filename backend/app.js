const express = require('express');
const app = express();
const PORT = 8080;
const { sequelize } = require('./models');
const serverPerfix = '/api-server';
const indexRouter = require('./routes');
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// /api-server
app.use(serverPerfix, indexRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log(err);
    console.log('database sync 오류');
  });
