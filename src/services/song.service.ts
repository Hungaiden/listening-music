import { get } from "http";
import { SingerRepository } from "../repositories/singer.repository";
import { SongRepository } from "../repositories/song.repository"; // Ensure this path is correct
import { TopicRepository } from "../repositories/topic.repository"; // Ensure this path is correct

export const SongService = {
    getSongsByTopicSlug: async (slugTopic: string) => {
        const topic = await TopicRepository.findTopicBySlug(slugTopic); 
        const songs = await SongRepository.findSongsByTopicId(topic.id);

        for(const song of songs) {
            const singer = await SingerRepository.findSingerById(song.singerId);
            song["singerFullName"] = singer ? singer.fullName : "";
        }
        
        return {
            topicTitle: topic.title,
            songs
        };
    },

    getSongBySlug: async (slugSong: string) => {
        const song = await SongRepository.findSongBySlug(slugSong);
        const singer = await SingerRepository.findSingerById(song.singerId);
        const topic = await TopicRepository.findTopicById(song.topicId);
        return {
            song:song,
            singer: singer,
            topic: topic
        };
    }
};