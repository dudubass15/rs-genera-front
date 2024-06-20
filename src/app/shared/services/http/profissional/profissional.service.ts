import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/core/interface/response.interface';
import { environment } from 'src/environments/environment';
import { ProfissionalInterface } from '../../../interfaces/profissional.interface';

@Injectable({
    providedIn: 'root',
})
export class ProfissionalService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<ResponseInterface<ProfissionalInterface[]>> {
        return this.http.get<ResponseInterface<ProfissionalInterface[]>>(`${environment.baseUrl}/professionals`);
    }

    public get(id: number): Observable<ResponseInterface<ProfissionalInterface[]>> {
        return this.http.get<ResponseInterface<ProfissionalInterface[]>>(`${environment.baseUrl}/professionals/${id}`);
    }

    public add(data: ProfissionalInterface): Observable<ResponseInterface<ProfissionalInterface[]>> {
        return this.http.post<ResponseInterface<ProfissionalInterface[]>>(`${environment.baseUrl}/professionals`, data);
    }

    public put(id: number, data: ProfissionalInterface): Observable<ResponseInterface<ProfissionalInterface>> {
        return this.http.put<ResponseInterface<ProfissionalInterface>>(`${environment.baseUrl}/professionals/${id}`, { data });
    }

    public delete(id: number): Observable<ResponseInterface<ProfissionalInterface>> {
        return this.http.delete<ResponseInterface<ProfissionalInterface>>(`${environment.baseUrl}/professionals/${id}`);
    }
}
