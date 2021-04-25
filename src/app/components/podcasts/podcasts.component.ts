import { PodcastService } from './../../services/podcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  public podcastTitle = "Lastest Podcasts";
  public listOfPodcast = [];
  constructor(private podcastService: PodcastService) {
    
    podcastService.getPodCastList().subscribe((data) => {
      console.log("PodCast Data: ", data.podcasts)
      this.listOfPodcast = data.podcasts;
    })
  }

  ngOnInit(): void {
  }

}
