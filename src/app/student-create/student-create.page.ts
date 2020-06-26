import { Component, OnInit } from "@angular/core";
import { Student } from "../models/student";
import { ListadoAlumnosService } from "../servicio/listado-alumnos.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-create",
  templateUrl: "./student-create.page.html",
  styleUrls: ["./student-create.page.scss"],
})
export class StudentCreatePage implements OnInit {
  data: Student;

  constructor(private servicio: ListadoAlumnosService, public router: Router) {
    this.data = new Student();
  }

  ngOnInit() {}

  submitForm() {
    this.servicio.createStudent(this.data).subscribe((response) => {
      this.router.navigate(["student-list"]);
    });
  }
}
