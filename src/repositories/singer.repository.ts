import {Singer} from '../models/singer.model';

export const SingerRepository = {
    findSingerById : async (id:string) => {
        return await Singer.findOne({
            _id: id,
            deleted: false,
            status: "active"
        });
    }
}