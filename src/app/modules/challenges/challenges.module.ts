import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesItemComponent } from './components/challenges-item/challenges-item.component';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';

@NgModule({
  declarations: [ChallengesPageComponent, ChallengesItemComponent],
  imports: [
    CommonModule
  ]
})
export class ChallengesModule { }
