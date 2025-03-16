import { Topic } from "../models/topic.model";

export const TopicRepository = {
  findAll: async () => {
    return await Topic.find({ deleted: false });
  }
};