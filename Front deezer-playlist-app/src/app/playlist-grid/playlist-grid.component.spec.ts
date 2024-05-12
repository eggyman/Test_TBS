import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistGridComponent } from './playlist-grid.component';
import { DeezerService } from '../deezer.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatGridListModule } from '@angular/material/grid-list';

describe('PlaylistGridComponent', () => {
  let component: PlaylistGridComponent;
  let fixture: ComponentFixture<PlaylistGridComponent>;
  let mockDeezerService: jasmine.SpyObj<DeezerService>;

  beforeEach(async () => {
    mockDeezerService = jasmine.createSpyObj('DeezerService', ['getUserPlaylists']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatGridListModule,
        PlaylistGridComponent
      ],
      providers: [
        { provide: DeezerService, useValue: mockDeezerService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistGridComponent);
    component = fixture.componentInstance;
    mockDeezerService.getUserPlaylists.and.returnValue(of({ data: [{ id: 1, title: 'Test Playlist', picture_medium: 'test.jpg' }] }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load playlists on init', () => {
    expect(component.playlists.length).toBe(1);
    expect(component.playlists[0].title).toBe('Test Playlist');
  });
});
