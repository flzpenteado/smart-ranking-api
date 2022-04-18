import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async upsertPlayer(@Body() dto: CreatePlayerDto) {
    return this.playerService.upsertPlayer(dto);
  }

  @Get()
  async get(@Query('email') email: string): Promise<Player[] | Player> {
    if (email) {
      return this.playerService.getByEmail(email);
    } else {
      return this.playerService.get();
    }
  }
}
