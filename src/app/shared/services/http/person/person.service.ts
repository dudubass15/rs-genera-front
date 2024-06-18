import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/core/interface/response.interface';
import { environment } from 'src/environments/environment';
import { PersonInterface } from '../../../interfaces/person.interface';

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<ResponseInterface<PersonInterface[]>> {
        return this.http.get<ResponseInterface<PersonInterface[]>>(`${environment.baseUrl}/persons`);
    }

    public get(id: number): Observable<ResponseInterface<PersonInterface[]>> {
        return this.http.get<ResponseInterface<PersonInterface[]>>(`${environment.baseUrl}/persons/${id}`);
    }

    public add(data: PersonInterface): Observable<ResponseInterface<PersonInterface>> {
        return this.http.post<ResponseInterface<PersonInterface>>(`${environment.baseUrl}/persons`, data);
    }

    public put(id: number, data: PersonInterface): Observable<ResponseInterface<PersonInterface>> {
        return this.http.put<ResponseInterface<PersonInterface>>(`${environment.baseUrl}/persons/${id}`, data);
    }

    public delete(id: number): Observable<ResponseInterface<PersonInterface>> {
        return this.http.delete<ResponseInterface<PersonInterface>>(`${environment.baseUrl}/persons/${id}`);
    }
}
