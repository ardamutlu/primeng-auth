import { Component } from '@angular/core';
import { UserModel } from '../../auth/models/user.model';
import { AuthService } from '../../auth/services/auth.service';

export type UserType = UserModel | undefined;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  currentUser: UserType;

  constructor(private authService: AuthService) {
    this.currentUser = authService.currentUser;
  }

  logout() {
    this.authService.logout();
    document.location.reload();
  }
}
