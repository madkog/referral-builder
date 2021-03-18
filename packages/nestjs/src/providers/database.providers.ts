import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
            type: 'mysql',
            host: process.env.MYSQLHOST,
            port: parseInt(process.env.MYSQLPORT),
            username: process.env.MYSQLUSER,
            database: process.env.MYSQLDATABASE,
            password: process.env.MYSQLPASSWORD,
            synchronize: true,
        }),
    },
];