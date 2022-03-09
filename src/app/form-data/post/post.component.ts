import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _route:ActivatedRoute , private _http:HttpClient , private API:ApiService) { }
  id:number;
  post:any;
  double:any;
  ngOnInit(): void {
  this._route.queryParams.subscribe(para=>{
    console.log(para['id'])
    this.id = para['id'];
  })
  this.post = this.API.getPost(this.id).subscribe(data=>{
    this.post=data;
  });
  this.API.double(this.id).subscribe(data=>{
  this.double=data
  });
  }
}
