import { Module } from '@nestjs/common';
//import { databaseProviders } from '../providers/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQLHOST,
            port: parseInt(process.env.MYSQLPORT),
            username: process.env.MYSQLUSER,
            password: process.env.MYSQLPASSWORD,
            database: process.env.MYSQLDATABASE,
            synchronize: true,
            autoLoadEntities: true,
            // migrations: ["./src/migrations/*{.ts,.js}"],
            // migrationsTableName: "migrations_typeorm",
            // migrationsRun: true,
            // cli: {
            //     migrationsDir: "./src/migrations"
            // }
          }),
    ],
    // providers: [...databaseProviders],
    // exports: [...databaseProviders],
})
export class DatabaseModule {}
