import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import TextingRouter from '../routers/test';
const app = express();

const PORT = process.env.PORT || 4040;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use('/api/v1', TextingRouter);

app.get('/api/v1/health-check', (req, res) => {
    res.json({
        success: true,
        message: 'HRMS-Service Up and Running',
    })
})

app.listen(PORT, () => {
    console.log(`Application Running on PORT: ${PORT}`);
})