import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

 userDetails: any;
  
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.showUserDetails();
  }

  showUserDetails() {
    console.log("Pramiterized User Details Route: ", this.route.snapshot.params['id']);
    const id = this.route.snapshot.params['id'];
    this.usersService.getUserById(id).subscribe(data => {
      this.userDetails = data;
      console.log("User Details: ", data)
      
    }, (error) => {
      console.log("Error occured while fetching user details", error.message)
    })
}

}
