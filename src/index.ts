import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import AnimalsRouter from './animals/infraestructure/AnimalRoutes';
import ZooRouter from './zoo/infraestructure/ZooRoutes';

const app = express();
app.use(cors());
app.disable("x-powered-by");

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 1, // Límite de 6 solicitudes por hora
    message: "Demasiadas peticiones realizadas, intenta después de 1 hora"
});

const port = process.env.PORT || 4000;
app.use(express.json());

app.use('/api/animals', accountLimiter, AnimalsRouter);
app.use('/api/zoo', ZooRouter);

app.listen(port, () => {
    console.log(`Server servido en la puerta ${port}`);
});
