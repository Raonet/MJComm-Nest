import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Forum } from './interfaces/forum.interface';
import { ForumStep } from './interfaces/forum-step.interface';
import { ForumPraise } from './interfaces/forum-praise.interface';
import { ForumComment } from './interfaces/forum-comment.dto';
import { ForumDto } from './dto/forum.dto';

@Injectable()
export class ForumService {
  constructor(
    @Inject('FORUM_MODEL') private readonly forumModel: Model<Forum>,
    @Inject('FORUMSTEP_MODEL') private readonly forumStpeModel: Model<ForumStep>,
    @Inject('FORUMPRAISE_MODEL') private readonly forumPraiseModel: Model<ForumPraise>,
    @Inject('FORUMCOMMENT_MODEL') private readonly forumCommentModel: Model<ForumComment>,
  ) {}
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
