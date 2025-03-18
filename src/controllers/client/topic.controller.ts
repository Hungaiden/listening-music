import { Request, Response } from "express";
import { TopicService } from "../../services/topic.service";

export const index = async (req: Request, res: Response) => {
  const topics = await TopicService.getAllTopics();
  res.render(
    "client/pages/topics/index", 
    {
      pageTitle: "Chủ đề bài hát",
      topics: topics
    }
  );
};