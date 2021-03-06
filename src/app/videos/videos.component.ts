import { Component, OnInit } from '@angular/core';
import { YouSightsService } from '../api/services/you-sights.service';
import { Topic, Video } from '../api/models';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  public topics: Topic[];
  public videos: Video[];
  public errorMessage: string;

  constructor(private apiService: YouSightsService) { }

  ngOnInit() {
    this.apiService.Get_Topics().subscribe(topics => {
      this.topics = topics;
    }, error => {
        console.log(error);
    });
  }

  getVideosForTopic(topicId: number) {
    this.videos = [];
    this.errorMessage = null;

    this.apiService.Get_Videos_By_Topic_Id(topicId).subscribe(videos => {
      this.videos = videos;
    }, error => {
        if (error.status === 404) {
            this.errorMessage = '404 Not Found';
        }
    });
  }

}
