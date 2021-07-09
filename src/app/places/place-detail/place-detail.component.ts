import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  placeID:string=''
  constructor(private route:ActivatedRoute,public router:Router) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.placeID = data.string;
      console.log(this.placeID);
    })
  }

}
