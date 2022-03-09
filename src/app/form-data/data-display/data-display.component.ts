import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Student {
  name: string;
  course: string;
  gyear: number;
}
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  constructor(private _http: HttpClient) {}
  data: Student[] = [
    {
      name: 'Archit',
      course: 'Btech',
      gyear: 2022,
    },
    {
      name: 'Kirti',
      course: 'Btech',
      gyear: 2022,
    },
    {
      name: 'Nikhil',
      course: 'Btech',
      gyear: 2022,
    },
    {
      name: 'Random',
      course: 'Btech',
      gyear: 2022,
    },
    {
      name: 'Vidhi',
      course: 'Mtech',
      gyear: 2022,
    },
    {
      name: 'Ritika',
      course: 'Btech',
      gyear: 2022,
    },
    {
      name: 'Arjun',
      course: 'Btech',
      gyear: 2022,
    },
    {
      name: 'Neha',
      course: 'BSC',
      gyear: 2022,
    },
    {
      name: 'Namen',
      course: 'MCA',
      gyear: 2022,
    },
    {
      name: 'Manan',
      course: 'BCA',
      gyear: 2022,
    },
  ];
  searchName: string = '';
  searchCourse: string = '';
  searchYear: number;
  dataList: any = [];
  getData() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts', {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
  display() {
    console.log(this.dataList);
  }
  ngOnInit(): void {
    this.getData().subscribe(
      (data) => {
        this.dataList = data;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.dataList);
    this.display();
  }
}
