import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtefatoController } from './artefato/artefato.controller';
import { ArtefatoModule } from './artefato/artefato.module';
import { Artefato } from './artefato/artefato.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ArtefatoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'verbose-happiness.sqlite.db',
      //entities: [Artefato], // Register your entities
      //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      //dropSchema: true,
    }),

    ArtefatoModule,
  ],
  controllers: [AppController, ArtefatoController],
  providers: [AppService],
})
export class AppModule {}
