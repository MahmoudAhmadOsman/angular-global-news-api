import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  public listOfUsers = [];
  public loading = true;
  constructor(private userService: UsersService) {
    
    userService.getAllUsers().subscribe(users => {

      this.listOfUsers = users;
      this.loading = false;

      console.log(users)

    }, (error) => {
      console.log("There is an error: ", error.message);

    }
    );




    

   }

  ngOnInit(): void {
  }

}
