// src/index.ts
import dotenv from 'dotenv';
import express from 'express';
import { logger } from './infrastructure/logger';
import { errorHandler } from './interface/middlewares/errorHandler';
import { bookRoutes } from './interface/routes/bookRoutes';
import { setupSwagger } from './interface/swagger';
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', bookRoutes);
app.use(errorHandler);
setupSwagger(app);

const PORT = 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
