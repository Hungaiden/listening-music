import { TopicRepository } from "../repositories/topic.repository";

export const TopicService = {
  getAllTopics: async () => {
    const topics = await TopicRepository.findAll();
    // Có thể xử lý logic ở đây nếu cần
    return topics;
  }
};