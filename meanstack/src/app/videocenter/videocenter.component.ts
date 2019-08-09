import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css']
})
export class VideocenterComponent implements OnInit {
  videos = [
    {title: 'title3', url: 'url3', description: 'des'},
    {title: 'title4', url: 'url4', description: 'des'}
  ];
  selectedVideoFromChild: Video;
  constructor() { }

  ngOnInit() {
  }


eventFromChild(video: Video) {
  console.log(video);
  this.selectedVideoFromChild = video;
  }




}
