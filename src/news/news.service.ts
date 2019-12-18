import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { News } from './interfaces/news.interfaces';
import { NewsDto } from './dto/news.dto';

@Injectable()
export class NewsService {
  constructor(@Inject('NEWS_MODEL') private readonly newsModel: Model<News>) {}
  async getAllNews() {
    return await this.newsModel.find();
  }
  async addNews(newDto: NewsDto) {
    const news = new this.newsModel(newDto);
    return await news.save();
  }
  async delNews(newsId) {
    return await this.newsModel.remove({_id: newsId});
  }
}
