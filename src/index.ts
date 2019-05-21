import express, {Request, Response} from 'express';

const app = express();

import {getTexts} from './services/home-service';

app.get('/', (req: Request, res: Response) => {
    res.json(getTexts('hi'));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));