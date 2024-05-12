import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Configurez le composant comme autonome
  imports: [RouterModule] // Importez les modules nécessaires
})
export class AppComponent {
  title = 'deezer-playlist-app';
}
