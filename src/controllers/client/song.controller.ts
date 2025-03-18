import { Request, Response } from "express";
import { SongService } from "../../services/song.service";

export const index = async (req: Request, res: Response) => {
    const slugTopic:string = req.params.slugTopic;
    const { topicTitle, songs } = await SongService.getSongsByTopicSlug(slugTopic);

    res.render(
        "client/pages/songs/index", 
        {
            pageTitle: "Danh sách bài hát",
            songs: songs,
            topicTitle: topicTitle
        }
    );
};

export const detail = async (req: Request, res: Response) => {
    const slugSong:string = req.params.slugSong;
    const {song, singer, topic} = await SongService.getSongBySlug(slugSong);
    console.log(song);
    res.render(
        "client/pages/songs/detail", 
        {
            song: song,
            singer: singer,
            topic: topic,
            pageTitle:"Chi tiết bài hát"
        }
    );
}