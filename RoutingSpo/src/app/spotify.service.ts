import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBLDSzsszvA1J0A37IFkDt6CvYjOxCryYFFflZm5hWyKGZhPDQJpZpYIjW4LsVob4o5pWpeWmF7sA9wQl943paAN0uK56N_mqMH0cgV6g4MBDa-KjVQCa8eSoFJFJ1O2UBxfA5UoUiAs2CZYpGPdvBHq5jJ0y3A7YY"'
    });

    let obsTrack = this.http.get(url,{headers});
    return obsTrack;
  }
}
