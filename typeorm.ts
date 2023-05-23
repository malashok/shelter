module.exports = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || '127.0.0.1',
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migration/**/*.js'],
    charset: 'utf8mb8',
    cli: {
        migrationsDir: 'src/migration',
    },
    logging: true,
};
