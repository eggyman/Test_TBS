import { Routes } from '@angular/router';
import { PlaylistGridComponent } from './playlist-grid/playlist-grid.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';

export const routes: Routes = [
  { path: '', component: PlaylistGridComponent },
  { path: 'playlist/:id', component: PlaylistDetailsComponent }
];
