import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule
import { DeezerService } from '../deezer.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-playlist-grid',
  templateUrl: './playlist-grid.component.html',
  styleUrls: ['./playlist-grid.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatGridListModule] // Ajoutez HttpClientModule ici
})
export class PlaylistGridComponent implements OnInit {
  playlists: any[] = [];

  constructor(private deezerService: DeezerService) {}

  ngOnInit(): void {
    this.deezerService.getUserPlaylists(5).subscribe((data: any) => {
      this.playlists = data.data;
    });
  }
}
