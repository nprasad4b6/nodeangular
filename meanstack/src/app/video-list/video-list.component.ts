import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {

  @Input() public videos;

  @Output()  public selectedVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 onClick(video) {
  //  console.log(video);
   this.selectedVideo.emit(video);
  }

}
