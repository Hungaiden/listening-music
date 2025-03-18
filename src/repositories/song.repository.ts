import { Song } from "../models/song.model";

export const SongRepository = {
    findSongsByTopicId: async (topicId:string) => {
        return await Song.find({
            topicId: topicId,
            deleted: false,
            status: "active"
        }).select("id title avatar singerId like slug");
    },
    
    findSongBySlug: async (slug:string) => {
        return await Song.findOne({
            slug: slug,
            deleted: false,
            status: "active"
        });
    }
};