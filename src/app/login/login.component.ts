import {Component, OnInit} from '@angular/core';
import {UsersService} from "../providers/users.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
    }

    login() {
        this.usersService.login("user", "user");
    }

    logout() {
        this.usersService.logout();
    }


}
