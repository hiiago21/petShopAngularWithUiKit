import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: User;

  constructor(private router: Router) { }

  ngOnInit() {

    this.user = Security.getUser();
  }

  logout(){
    Security.clear();
    this.router.navigate(['/login'])
  }

}
