import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorys } from './categorys/categorys.enity';
import { CategorysModule } from './categorys/categorys.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    TypeOrmModule.forRoot({
      entities: [Categorys],
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'rootuserdaer',
      password: 'y76hu!SK$9gFYmq',
      database: 'reactonlinestor',
      //autoLoadEntities: true,
      //synchronize: true,
    }),
    CategorysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
