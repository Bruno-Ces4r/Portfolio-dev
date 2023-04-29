import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './modules/apresentacao/apresentacao.component';
import { ExperienceComponent } from './modules/experience/experience.component';

const routes: Routes = [
  { path: '', component: ApresentacaoComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
