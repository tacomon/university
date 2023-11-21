import { Injectable } from '@angular/core';
import { ConexionService } from '../shared/services/conexion.service';
import { HttpMethodsEnum } from '../shared/constantes/http-methods.enum';
import { IParametersFetchModel } from '../model/parameters-fetch.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private conexion: ConexionService) { }

  getListAsignaturas(): Promise<any[]> {
    // const parametros: IParametersFetchModel<null> = {
    //   url: '/expense/filters',
    //   httpMethod: HttpMethodsEnum.GET,
    //   body: null
    // };
    // return this.conexion.consumeAPI<any[]>(parametros);
    return new Promise((resolve, reject) => {
      resolve([
        { idAsignatura: 1, nombre: 'Asignatura 1'},
        { idAsignatura: 2, nombre: 'Asignatura 2'},
        { idAsignatura: 3, nombre: 'Asignatura 3'},
        { idAsignatura: 4, nombre: 'Asignatura 4'},
        { idAsignatura: 5, nombre: 'Asignatura 5'},
      ])
    })
  }

  getListUnidades(idAsignatura: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve([
        { idUnidad: 1, descripcion: 'Unidad 1', asignatura: 'asignatura', fechaInicio: '12/12/2023', fechaFin: '31/12/2023'},
        { idUnidad: 2, descripcion: 'Unidad 2', asignatura: 'asignatura', fechaInicio: '12/12/2023', fechaFin: '31/12/2023'},
        { idUnidad: 3, descripcion: 'Unidad 3', asignatura: 'asignatura', fechaInicio: '12/12/2023', fechaFin: '31/12/2023'},
        { idUnidad: 4, descripcion: 'Unidad 4', asignatura: 'asignatura', fechaInicio: '12/12/2023', fechaFin: '31/12/2023'},
        { idUnidad: 5, descripcion: 'Unidad 5', asignatura: 'asignatura', fechaInicio: '12/12/2023', fechaFin: '31/12/2023'},
      ])
    })
  }

  getListTemas(idUnidad: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve([
        { idTema: 1, descripcion: 'Tema 1', idAsignatura: 1, asignatura: 'asignatura', unidad: 'Unidad 1', idUnidad: 1, fechaInicio: '12/12/2023', fechaTermino: '31/12/2023', objetivo: 'Objetivo...'},
        { idTema: 2, descripcion: 'Tema 2', idAsignatura: 1, asignatura: 'asignatura', unidad: 'Unidad 1', idUnidad: 1, fechaInicio: '12/12/2023', fechaTermino: '31/12/2023', objetivo: 'Objetivo...'},
        { idTema: 3, descripcion: 'Tema 3', idAsignatura: 1, asignatura: 'asignatura', unidad: 'Unidad 1', idUnidad: 1, fechaInicio: '12/12/2023', fechaTermino: '31/12/2023', objetivo: 'Objetivo...'},
        { idTema: 4, descripcion: 'Tema 4', idAsignatura: 1, asignatura: 'asignatura', unidad: 'Unidad 1', idUnidad: 1, fechaInicio: '12/12/2023', fechaTermino: '31/12/2023', objetivo: 'Objetivo...'},
        { idTema: 5, descripcion: 'Tema 5', idAsignatura: 1, asignatura: 'asignatura', unidad: 'Unidad 1', idUnidad: 1, fechaInicio: '12/12/2023', fechaTermino: '31/12/2023', objetivo: 'Objetivo...'},
      ])
    })
  }

  getActividades(filtros: any): Promise<any[]>  {
    return new Promise((resolve, reject) => {
      resolve([
        { idActividad: 1, idTema: 1, tema: 'Tema 1', titulo: 'Título 1', fechaInicio: '11/11/2023', fechaEntrega: '12/11/2023', asignatura: 'Asignatura 1', idAsignatura: 1, idUnidad: 1, unidad: 'Unidad', alumno: 'Juan Perez'},
        { idActividad: 2, idTema: 1, tema: 'Tema 2', titulo: 'Título 2', fechaInicio: '11/11/2023', fechaEntrega: '12/11/2023', asignatura: 'Asignatura 1', idAsignatura: 1, idUnidad: 1, unidad: 'Unidad', alumno: 'Juan Perez'},
        { idActividad: 3, idTema: 1, tema: 'Tema 3', titulo: 'Título 3', fechaInicio: '11/11/2023', fechaEntrega: '12/11/2023', asignatura: 'Asignatura 1', idAsignatura: 1, idUnidad: 1, unidad: 'Unidad', alumno: 'Juan Perez'},
        { idActividad: 4, idTema: 1, tema: 'Tema 4', titulo: 'Título 4', fechaInicio: '11/11/2023', fechaEntrega: '12/11/2023', asignatura: 'Asignatura 1', idAsignatura: 1, idUnidad: 1, unidad: 'Unidad', alumno: 'Juan Perez'},
        { idActividad: 5, idTema: 1, tema: 'Tema 5', titulo: 'Título 5', fechaInicio: '11/11/2023', fechaEntrega: '12/11/2023', asignatura: 'Asignatura 1', idAsignatura: 1, idUnidad: 1, unidad: 'Unidad', alumno: 'Juan Perez'},
      ])
    })
  }

}
