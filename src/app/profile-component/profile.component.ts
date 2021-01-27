import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  state:boolean = true;

  constructor(private route: ActivatedRoute) {

    //Query Parameter

    this.route.queryParamMap.subscribe(params => console.log(params.get('id')));

    //this.route.queryParamMap.subscribe(params => this.cambiarEstado());


   }

   cambiarEstado(){
     this.state = !this.state;

     console.log('El estado es '+this.state)
   }

  ngOnInit(): void {
  }

}
