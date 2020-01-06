import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { Forum } from './interfaces/forum.interface';
import { ForumStep } from './interfaces/forum-step.interface';
import { ForumPraise } from './interfaces/forum-praise.interface';
import { ForumComment } from './interfaces/forum-comment.interface';
import { ForumDto } from './dto/forum.dto';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class ForumService {
  constructor(
    @Inject('FORUM_MODEL') private readonly forumModel: Model<Forum>,
    @Inject('FORUMSTEP_MODEL') private readonly forumStepModel: Model<ForumStep>,
    @Inject('FORUMPRAISE_MODEL') private readonly forumPraiseModel: Model<ForumPraise>,
    @Inject('FORUMCOMMENT_MODEL') private readonly forumCommentModel: Model<ForumComment>,
    @Inject('USER_MODEL') private readonly userModel: Model<User>,
  ) {}
  async getAllForum() {
    return await this.forumModel.find();
  }
  async addForum( forumDto: ForumDto) {
    const forum = new this.forumModel(forumDto);
    const data = await forum.save();
    const json = { forumId: data._id };
    const praise = new this.forumPraiseModel(json);
    const step = new this.forumStepModel(json);
    const comment = new this.forumCommentModel(json);
    praise.save();
    step.save();
    comment.save();
    return data;
  }
  async delForum(forumId) {
    return await this.forumModel.remove({_id: forumId});
  }
  async getForum(forumid) {
    const forumdata = await this.forumModel.findOne({_id: forumid});
    const userid = forumdata.author.userid;
    const authers = await this.userModel.findOne({_id: userid});
    const praisedata = await this.forumPraiseModel.findOne({forumId: forumid});
    const stepdata = await this.forumStepModel.findOne({forumId: forumid});
    const commentdata = await this.forumCommentModel.findOne({forumId: forumid});
    const data = {
      forum: forumdata,
      auther: authers,
      praise: praisedata,
      step: stepdata,
      comment: commentdata,
    };
    return data;
  }
  async givePraise(praise) {
    const praisedata: any = await this.forumPraiseModel.findOne({forumId: praise.forumId});
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < praisedata.praises.length; i++) {
      if (praisedata.praises[i].userid === praise.praises.userid) {
        return 0;
      }
    }
    return await this.forumPraiseModel.update({forumId: praise.forumId}, {$push: {praises: praise.praises}});
  }
  async giveStep(step) {
    const stepdata: any = await this.forumStepModel.findOne({forumId: step.forumId});
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < stepdata.steps.length; i++) {
      if (stepdata.steps[i].userid === step.steps.userid) {
        return 0;
      }
    }
    return await this.forumStepModel.update({forumId: step.forumId}, {$push: {steps: step.steps}});
  }
}
