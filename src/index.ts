import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//const express = require("express");
const cors = require("cors");

const port: number = +(process?.env?.PORT ?? 3001);

(async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors({"Access-Control-Allow-Origin":"http://localhost:5173"}));
    await app.listen(port);
})();
