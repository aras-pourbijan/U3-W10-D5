import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe({
      next: (v) => this.userlist = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
  console.log(userList: any);

  addUser(user: any) {
    this.userService.addUser(user).subscribe(resp => console.log(resp));
  }

  updateUser(user: any) {
    this.userService.updateUser(user).subscribe(resp => console.log(resp));
  }

  removeUser(id: number) {
    this.userService.deleteUser(id).subscribe(resp => console.log(resp));
  }

}
