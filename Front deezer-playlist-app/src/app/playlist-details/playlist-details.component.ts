import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule
import { DeezerService } from '../deezer.service';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule] // Ajoutez HttpClientModule ici
})
export class PlaylistDetailsComponent implements OnInit {
  playlist: any;
  tracks: any[] = [];
  playlistId: number;

  constructor(
    private route: ActivatedRoute,
    private deezerService: DeezerService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.playlistId = id ? +id : 0;
  }

  ngOnInit(): void {
    this.deezerService.getPlaylistDetails(this.playlistId).subscribe((data: any) => {
      this.playlist = data;
    });

    this.loadMoreTracks();
  }

  loadMoreTracks(): void {
    this.deezerService.getPlaylistTracks(this.playlistId).subscribe((data: any) => {
      this.tracks.push(...data.data);
    });
  }
}
