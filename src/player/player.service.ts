import { Injectable, Logger } from '@nestjs/common';
import { uuid } from 'short-uuid';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayerService {
  private players: Player[] = [];

  private readonly logger = new Logger(PlayerService.name);

  async upsertPlayer(dto: CreatePlayerDto) {
    const { email } = dto;

    const existingPlayer = this.players.find(
      (player) => player.email === email,
    );

    if (existingPlayer) {
      this.update(existingPlayer, dto);
    } else {
      this.create(dto);
    }
  }

  async get(): Promise<Player[]> {
    return this.players;
  }
  async getByEmail(email: string) {
    return this.players.find((player) => player.email === email);
  }

  private create(dto: CreatePlayerDto) {
    const { name, email, phone } = dto;

    const player: Player = {
      _id: uuid(),
      name,
      email,
      phone,
      ranking: 'A',
      rankingPosition: 1,
      imageUrl: 'www.google.com/foto123.jpg',
    };

    this.logger.log('player: ', player);

    this.players.push(player);
  }

  private update(player: Player, dto: CreatePlayerDto): void {
    const { name } = dto;
    player.name = name;
  }
}
