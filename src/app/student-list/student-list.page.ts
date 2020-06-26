import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ListadoAlumnosService } from "../servicio/listado-alumnos.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.page.html",
  styleUrls: ["./student-list.page.scss"],
})
export class StudentListPage implements OnInit {
  lista: any;
  constructor(private servicio: ListadoAlumnosService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAlumnos();
  }

  getAlumnos() {
    this.servicio.getData().subscribe((resp) => {
      this.lista = resp;
    });
  }

  delete(alumnos: { id: number }) {
    //Delete item in Student data
    this.servicio.deleteAlumno(alumnos.id).subscribe((Response) => {
      //Update list after delete is successful
      this.getAlumnos();
    });
  }
}
