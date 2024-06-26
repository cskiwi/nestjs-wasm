import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
  standalone: true,
  imports: [RouterModule, JsonPipe],
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  private readonly httpClient = inject(HttpClient);
  testApiCall = derivedAsync(() =>
    this.httpClient.get(`http://localhost:3000/api/backend-test`),
  );
}
