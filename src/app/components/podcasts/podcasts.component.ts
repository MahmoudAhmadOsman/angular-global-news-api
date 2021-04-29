import { PodcastService } from './../../services/podcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  public podcastTitle: string = "Lastest Podcasts";
  public listOfPodcast = [];
  public loading = true;

  constructor(private podcastService: PodcastService) {
    
    podcastService.getPodCastList().subscribe((data) => {
      console.log("PodCast Data: ", data.podcasts)
      this.listOfPodcast = data.podcasts;
      this.loading = false;
    }, (error) => {
      console.log("Error: ", error)
    })
  }

  ngOnInit(): void {
  }

}
