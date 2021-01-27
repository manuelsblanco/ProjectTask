import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-projets-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private route: Router) { }

  naviHome(){
    this.route.navigate(['']);
  }

  ngOnInit(): void {
  }

}
