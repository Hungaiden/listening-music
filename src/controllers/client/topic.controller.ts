import { Request, Response } from "express";
import { TopicService } from "../../services/topic.service";

export const index = async (req: Request, res: Response) => {
  const topics = await TopicService.getAllTopics();
  console.log(topics);
  res.render("client/pages/topics/index", { topics });
};