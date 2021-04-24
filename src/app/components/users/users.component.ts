import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  public listOfUsers = []
  constructor(private userService: UsersService) {
    
    userService.getAllUsers().subscribe(users => {

      this.listOfUsers = users;

      console.log(users)

    }, (error) => {
      console.log("There is an error: ", error);

    }
    );




    

   }

  ngOnInit(): void {
  }

}
