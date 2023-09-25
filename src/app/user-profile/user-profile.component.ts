import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(public fetchApiData: FetchApiDataService) { }

  users: any[] = []

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.fetchApiData.getOneUser().subscribe((resp: any) => {
      this.users = resp;
      console.log(this.users);
      return this.users;
    });
  }

}
