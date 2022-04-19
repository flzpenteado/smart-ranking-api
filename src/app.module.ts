import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { PlayerService } from './player/player.service';

const DB_URL =
  'mongodb+srv://admin:gRBEND7MEy6m3VND@cluster0.ihlye.mongodb.net/smartRanking?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(DB_URL), PlayerModule],
  controllers: [],
  providers: [PlayerService],
})
export class AppModule {}
