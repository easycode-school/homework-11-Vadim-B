import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../interfaces/image';
import { UserService } from '../../services/user.service';
import { AuthGlobalService } from '../../../../services/auth-global.service';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  /** Идентификатор пользователя */
  @Input() userId: string;
  @Input() authUserId: string;

  /** Массив изображений пользователя */
  private images: Image[];

  constructor(private userService: UserService, private auth: AuthGlobalService) {
  }

  ngOnInit() {
    this.userService.getUserImages(this.userId).subscribe((images: Image[]) => {
      this.images = images;
    });
  }

}
