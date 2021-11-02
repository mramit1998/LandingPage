import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  filteredMovies = [];
  recentlyWatched = ['#CEE5D0', '#F3F0D7', '#FED2AA', 
                '#CEE5D0', '#F3F0D7', '#FED2AA']

  empty:boolean = false;              

  constructor() { }

  ngOnInit(): void {
    this.filteredMovies = this.recentlyWatched;
  }

  filterElement(input: string) {
    
    this.filteredMovies = this.recentlyWatched.filter(
      (elem) => {
        if (elem.toLowerCase().includes(input.toLowerCase())) {
          return elem;
        }
      }
    );
    
   
    if (this.filteredMovies.length === 0) {
      this.empty = true;
    }else{
      this.empty = false;
    }
  }

}
