import { Observable, map } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { UniqueService } from 'src/app/modules/home/validators/unique.validator'

interface UniqueEmailResponse {
  data: {
    success: boolean
  }
}

@Injectable({
  providedIn: 'root',
})
export class SubscriptionApiService implements UniqueService {
  constructor(private httpClient: HttpClient) {}

  checkIfExist(value: string): Observable<boolean> {
    return this.httpClient
      .post<UniqueEmailResponse>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/check-unique-email', {
        email: value,
      })
      .pipe(map((response) => response.data.success))
  }
}
