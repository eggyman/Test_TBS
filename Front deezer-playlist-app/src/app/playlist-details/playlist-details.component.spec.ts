import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistDetailsComponent } from './playlist-details.component';
import { DeezerService } from '../deezer.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlaylistDetailsComponent', () => {
  let component: PlaylistDetailsComponent;
  let fixture: ComponentFixture<PlaylistDetailsComponent>;
  let mockDeezerService: jasmine.SpyObj<DeezerService>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockDeezerService = jasmine.createSpyObj('DeezerService', ['getPlaylistDetails', 'getPlaylistTracks']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (key: string) => '1'
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        PlaylistDetailsComponent
      ],
      providers: [
        { provide: DeezerService, useValue: mockDeezerService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDetailsComponent);
    component = fixture.componentInstance;
    mockDeezerService.getPlaylistDetails.and.returnValue(of({ id: 1, title: 'Test Playlist', picture_medium: 'test.jpg', creator: { name: 'Test Creator' }, duration: 3600 }));
    mockDeezerService.getPlaylistTracks.and.returnValue(of({ data: [{ title: 'Test Track', artist: { name: 'Test Artist' }, duration: 180 }] }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load playlist details on init', () => {
    expect(component.playlist.title).toBe('Test Playlist');
    expect(component.playlist.creator.name).toBe('Test Creator');
  });

  it('should load tracks on init', () => {
    expect(component.tracks.length).toBe(1);
    expect(component.tracks[0].title).toBe('Test Track');
  });
});
