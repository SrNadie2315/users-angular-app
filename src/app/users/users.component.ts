import { Component, OnInit } from "@angular/core";

import { UserService } from "../user.service";
import {MessageService} from "../message.service";
import { User } from "../models/user";

@Component({
  selector: "fes-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private messageService:MessageService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
}
