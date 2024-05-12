import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  private readonly corsAnywhereUrl = 'http://localhost:8080/';
  private readonly baseUrl = 'https://api.deezer.com';

  constructor(private http: HttpClient) {}

  getUserPlaylists(userId: number): Observable<any> {
    return this.http.get(`${this.corsAnywhereUrl}${this.baseUrl}/user/${userId}/playlists`);
  }

  getPlaylistDetails(playlistId: number): Observable<any> {
    return this.http.get(`${this.corsAnywhereUrl}${this.baseUrl}/playlist/${playlistId}`);
  }

  getPlaylistTracks(playlistId: number): Observable<any> {
    return this.http.get(`${this.corsAnywhereUrl}${this.baseUrl}/playlist/${playlistId}/tracks`);
  }
}
