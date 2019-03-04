import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { AuthGlobalService } from 'src/app/services/auth-global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  /** Пользователь, данные которого просматриваются */
  private user: User;

  /** Текущая вкладка */
  public activeTab = 'selfies';
  public userProfileId: string;
  public authUserId: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private auth: AuthGlobalService
  ) { }

  ngOnInit() {
    this.userProfileId = this.activeRoute.snapshot.params.id;
    this.authUserId = this.auth.getUserId;

    this.userService.getUserInfo(this.userProfileId).subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
  }
}
