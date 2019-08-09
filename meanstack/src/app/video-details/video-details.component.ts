import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  @Input() public video;
  constructor() { }

  ngOnInit() {
  }


}
