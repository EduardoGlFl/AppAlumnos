import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "../models/student";

@Injectable({
  providedIn: "root",
})
export class ListadoAlumnosService {
  base_path = "http://localhost/Rest/index.php/SisEscolar_WS";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  //Crear nuevo estudiante
  createStudent(alumnos: Student): Observable<Student> {
    return this.http.post<Student>(
      this.base_path + "/" + "insertAlumno_post",
      alumnos,
      this.httpOptions
    );
  }

  //Obtener los datos de todos los alumnos
  getData() {
    return this.http.get(this.base_path + "/" + "getuser_get");
  }

  /*deleteAlumno(alumnos: Student | number): Observable<Student> {
    const id = typeof alumnos === "number" ? alumnos : alumnos.id;
    const url = `${this.base_path}/${"deleteuser_post"}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions);
  }*/

  //Eliminar alumnos por id
  deleteAlumno(id: number) {
    return this.http.post<Student>(
      this.base_path + "/" + "deleteuser_post" + "/" + id,
      this.httpOptions
    );
  }
}
