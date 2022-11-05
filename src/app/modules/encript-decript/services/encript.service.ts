import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EncriptService {
  constructor(private httpClient: HttpClient) {}

  encript(body: { message: number[]; n: number; e: number }) {
    return this.httpClient.post<{ encripted_message: number[] }>(
      '/api/encript/create',
      body
    );
  }
  desencript(body: { p: number; q: number; e: number; message: number[] }) {
    return this.httpClient.post<{ dencripted_message: number[] }>('/api/decript', body);
  }
}
