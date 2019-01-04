import { Component, OnInit } from '@angular/core';
import { UserData } from "../model/userData";
import { Post } from "../model/post";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Array<Post> = [
    new Post({
      image: "https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg",
      text: "仙台最高",
      postedAt: "2019/1/4",
      // userData: new UserData()
      liked: true,
      likeCount: 20,
    }),
    new Post({
      image: "https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg",
      text: "仙台最高",
      postedAt: "2019/1/4",
      // userData: new UserData()
      liked: true,
      likeCount: 20,
    }),
  ]

  constructor() { }

  ngOnInit() {
  }

}
