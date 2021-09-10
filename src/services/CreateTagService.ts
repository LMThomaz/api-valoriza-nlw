import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface ITagRequest {
  name: string;
}

export class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) throw new Error('Incorrect name!');

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) throw new Error('Tag already exists!');

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}