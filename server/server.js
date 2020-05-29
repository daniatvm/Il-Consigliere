const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//RUTAS
const usersRouter = require('./routes/UserRoutes');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
