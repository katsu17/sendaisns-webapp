import { UserData } from "./userData";

export class Post {
    image: string;
    text: string;
    postedAt;
    // userData: UserData;
    liked: boolean;
    likeCount: number;
    
    constructor({
        image,
        text,
        postedAt,
        // userData,
        liked,
        likeCount,
    }){
        this.image = image;
        this.text = text;
        this.postedAt = postedAt;
        // this.userData = userData;
        this.liked = liked;
        this.likeCount = likeCount;
    }

    
}