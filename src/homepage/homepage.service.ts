import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { HomePageImg } from './interfaces/homepage-img.interface';
import { homepageImgDto } from './dto/homepage-img.dto';

@Injectable()
export class HomepageService {
  constructor(@Inject('HOME_MODEL') private readonly homeModel: Model<HomePageImg>) {}
  async getHomeImg() {
    return await this.homeModel.find();
  }
  async addHomeImg(originalname) {
    const urls = 'http://localhost:3000/static/homepage/' + originalname;
    const homeImg = {url: urls};
    const createUrl = new this.homeModel(homeImg);
    return await createUrl.save();
  }
  async delHomeImg(homeId) {
    return await this.homeModel.remove({_id: homeId});
  }
}
