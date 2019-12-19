import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Forum } from './interfaces/forum.interface';
import { ForumDto } from './dto/forum.dto';

@Injectable()
export class ForumService {
  constructor(@Inject('FORUM_MODEL') private readonly forumModel: Model<Forum>) {}
  async getAllForum() {
    return await this.forumModel.find();
  }
  async addForum( forumDto: ForumDto) {
    const forum = new this.forumModel(forumDto);
    return await forum.save();
  }
  async delForum(forumId) {
    return await this.forumModel.remove({_id: forumId});
  }
}
