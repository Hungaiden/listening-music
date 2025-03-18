import { findSourceMap } from "module";
import { Topic } from "../models/topic.model";

export const TopicRepository = {
  findAll: async () => {
    return await Topic.find({ deleted: false });
  },

  findTopicBySlug: async (slug: string) => {
    return await Topic.findOne({
      slug: slug,
      deleted: false,
      status: "active"
    })
  },

  findTopicById: async (id: string) => {
    return await Topic.findOne({
      _id: id,
      deleted: false,
      status: "active"
    });
  }

  
};