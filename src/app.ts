import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());

app.use('/products', routes.productsRoutes);
app.use('/orders', routes.ordersRoutes);
app.use('/login', routes.loginRoutes);

export default app;
