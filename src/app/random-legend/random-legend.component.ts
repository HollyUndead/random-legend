import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LEGENDS } from './legends';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'randomLegend',
  standalone: true,
  imports: [NgFor, JsonPipe],
  templateUrl: './random-legend.component.html',
  styleUrl: './random-legend.component.css',
})
export class RandomLegend implements OnInit {
  public legendsData: any;
  public constructor(private http: HttpClient) {}
  public legends: any;

  public nums: number[] = [];
  public res: any[] = [];

  click() {
    let arr = this.legendsData.slice();
    this.nums = [];
    let res1 = [];
    for (let i = 0; i < 26; i++) {
      let randomNum = 0;
      while (this.nums.includes(randomNum) || randomNum === 0) {
        randomNum = Math.round(Math.random() * arr.length) + 1;
      }
      this.nums.push(randomNum);
      res1.push(arr[randomNum]);
    }
    // this.legends = res1;
    this.legends = [...res1];
  }

  ngOnInit(): void {
    const url: string = 'assets/jsonFile/legends.json';
    this.http.get(url).subscribe((response) => {
      this.legendsData = response;
    });
  }
}
