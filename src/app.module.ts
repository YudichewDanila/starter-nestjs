import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorys } from './categorys/categorys.enity';
import { UndercategorysModule } from './undercategorys/undercategorys.module';
import { CategorysModule } from './categorys/categorys.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    TypeOrmModule.forRoot({
      entities: [Categorys],
      type: 'mysql',
      host: process.env.host,
      port: Number(process.env.portBd),
      username: process.env.usernameBd,
      password: process.env.password,
      database: process.env.database,
      //autoLoadEntities: true,
      //synchronize: true,
    }),
    CategorysModule,
    UndercategorysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
