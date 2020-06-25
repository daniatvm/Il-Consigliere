const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//RUTAS
const userRouter = require('./routes/UserRoutes');
app.use('/usuario', userRouter);
const emailRouter = require('./routes/EmailRouter');
app.use('/correo', emailRouter);
const roleRouter = require('./routes/RoleRoutes');
app.use('/permiso', roleRouter);
const userRoleRouter = require('./routes/UserRoleRoutes');
app.use('/usuario_permiso', userRoleRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
