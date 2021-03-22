import { Module } from '@nestjs/common';
//import { databaseProviders } from '../providers/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            synchronize: true,
            autoLoadEntities: true,
            migrations: ["./src/migrations/*{.ts,.js}"],
            migrationsTableName: "migrations_typeorm",
            migrationsRun: true,
            cli: {
                migrationsDir: "./src/migrations"
            }
          }),
    ],
})
export class DatabaseModule {}
