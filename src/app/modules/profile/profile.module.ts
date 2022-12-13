import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from '../../modules/profile/overview/overview.component';

@NgModule({
  declarations: [ProfileComponent, OverviewComponent],
  imports: [CommonModule, ProfileRoutingModule, CardModule, ButtonModule],
})
export class ProfileModule {}
