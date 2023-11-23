import { Injectable } from '@angular/core';
import { ConexionService } from '../shared/services/conexion.service';
import { IParametersFetchModel } from '../model/parameters-fetch.model';
import { HttpMethodsEnum } from "../shared/constantes/http-methods.enum";

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  constructor(private conexion: ConexionService) {}

  async getListAsignaturas(): Promise<any[]> {
    // const parametros: IParametersFetchModel<null> = {
    //   url: '/expense/filters',
    //   httpMethod: HttpMethodsEnum.GET,
    //   body: null
    // };
    // return this.conexion.consumeAPI<any[]>(parametros);

    // return new Promise((resolve, reject) => {
    //   resolve([
    //     { idAsignatura: 1, nombre: 'Asignatura 1' },
    //     { idAsignatura: 2, nombre: 'Asignatura 2' },
    //     { idAsignatura: 3, nombre: 'Asignatura 3' },
    //     { idAsignatura: 4, nombre: 'Asignatura 4' },
    //     { idAsignatura: 5, nombre: 'Asignatura 5' },
    //   ]);
    // });
    const parametros: IParametersFetchModel<any> = {
      url: '/unidad/asignatura?',
      httpMethod: HttpMethodsEnum.GET,
      body: null,
    };
    return await this.conexion.consumeAPI<any[]>(parametros);
  }

  async getListUnidades(idAsignatura: number): Promise<any[]> {
    const parametros: IParametersFetchModel<any> = {
      url: '/unidad?idAsignatura='+idAsignatura,
      httpMethod: HttpMethodsEnum.GET,
      body: null,
    };
    return await this.conexion.consumeAPI<any[]>(parametros);
    // return new Promise((resolve, reject) => {
    //   resolve([
    //     {
    //       idUnidad: 1,
    //       descripcion: 'Unidad 1',
    //       asignatura: 'asignatura',
    //       fechaInicio: '12/12/2023',
    //       fechaFin: '31/12/2023',
    //     },
    //     {
    //       idUnidad: 2,
    //       descripcion: 'Unidad 2',
    //       asignatura: 'asignatura',
    //       fechaInicio: '12/12/2023',
    //       fechaFin: '31/12/2023',
    //     },
    //     {
    //       idUnidad: 3,
    //       descripcion: 'Unidad 3',
    //       asignatura: 'asignatura',
    //       fechaInicio: '12/12/2023',
    //       fechaFin: '31/12/2023',
    //     },
    //     {
    //       idUnidad: 4,
    //       descripcion: 'Unidad 4',
    //       asignatura: 'asignatura',
    //       fechaInicio: '12/12/2023',
    //       fechaFin: '31/12/2023',
    //     },
    //     {
    //       idUnidad: 5,
    //       descripcion: 'Unidad 5',
    //       asignatura: 'asignatura',
    //       fechaInicio: '12/12/2023',
    //       fechaFin: '31/12/2023',
    //     },
    //   ]);
    // });
  }

  async getListTemas(idUnidad: number): Promise<any[]> {
     const parametros: IParametersFetchModel<any> = {
       url: '/tema?idUnidad=' + idUnidad,
       httpMethod: HttpMethodsEnum.GET,
       body: null,
     };
     return await this.conexion.consumeAPI<any[]>(parametros);
    // return new Promise((resolve, reject) => {
    //   resolve([
    //     {
    //       idTema: 1,
    //       descripcion: 'Tema 1',
    //       idAsignatura: 1,
    //       asignatura: 'asignatura',
    //       unidad: 'Unidad 1',
    //       idUnidad: 1,
    //       fechaInicio: '12/12/2023',
    //       fechaTermino: '31/12/2023',
    //       objetivo: 'Objetivo...',
    //     },
    //     {
    //       idTema: 2,
    //       descripcion: 'Tema 2',
    //       idAsignatura: 1,
    //       asignatura: 'asignatura',
    //       unidad: 'Unidad 1',
    //       idUnidad: 1,
    //       fechaInicio: '12/12/2023',
    //       fechaTermino: '31/12/2023',
    //       objetivo: 'Objetivo...',
    //     },
    //     {
    //       idTema: 3,
    //       descripcion: 'Tema 3',
    //       idAsignatura: 1,
    //       asignatura: 'asignatura',
    //       unidad: 'Unidad 1',
    //       idUnidad: 1,
    //       fechaInicio: '12/12/2023',
    //       fechaTermino: '31/12/2023',
    //       objetivo: 'Objetivo...',
    //     },
    //     {
    //       idTema: 4,
    //       descripcion: 'Tema 4',
    //       idAsignatura: 1,
    //       asignatura: 'asignatura',
    //       unidad: 'Unidad 1',
    //       idUnidad: 1,
    //       fechaInicio: '12/12/2023',
    //       fechaTermino: '31/12/2023',
    //       objetivo: 'Objetivo...',
    //     },
    //     {
    //       idTema: 5,
    //       descripcion: 'Tema 5',
    //       idAsignatura: 1,
    //       asignatura: 'asignatura',
    //       unidad: 'Unidad 1',
    //       idUnidad: 1,
    //       fechaInicio: '12/12/2023',
    //       fechaTermino: '31/12/2023',
    //       objetivo: 'Objetivo...',
    //     },
    //   ]);
    // });
  }

  async getActividades(filtros: any): Promise<any[]> {
     const parametros: IParametersFetchModel<any> = {
       url: '/actividad?idTema=' + filtros.idTema,
       httpMethod: HttpMethodsEnum.GET,
       body: null,
     };
     return await this.conexion.consumeAPI<any[]>(parametros);
    // return new Promise((resolve, reject) => {
    //   resolve([
    //     {
    //       idActividad: 1,
    //       idTema: 1,
    //       tema: 'Tema 1',
    //       titulo: 'Título 1',
    //       fechaInicio: '11/11/2023',
    //       fechaEntrega: '12/11/2023',
    //       asignatura: 'Asignatura 1',
    //       idAsignatura: 1,
    //       idUnidad: 1,
    //       unidad: 'Unidad',
    //       alumno: 'Juan Perez',
    //     },
    //     {
    //       idActividad: 2,
    //       idTema: 1,
    //       tema: 'Tema 2',
    //       titulo: 'Título 2',
    //       fechaInicio: '11/11/2023',
    //       fechaEntrega: '12/11/2023',
    //       asignatura: 'Asignatura 1',
    //       idAsignatura: 1,
    //       idUnidad: 1,
    //       unidad: 'Unidad',
    //       alumno: 'Juan Perez',
    //     },
    //     {
    //       idActividad: 3,
    //       idTema: 1,
    //       tema: 'Tema 3',
    //       titulo: 'Título 3',
    //       fechaInicio: '11/11/2023',
    //       fechaEntrega: '12/11/2023',
    //       asignatura: 'Asignatura 1',
    //       idAsignatura: 1,
    //       idUnidad: 1,
    //       unidad: 'Unidad',
    //       alumno: 'Juan Perez',
    //     },
    //     {
    //       idActividad: 4,
    //       idTema: 1,
    //       tema: 'Tema 4',
    //       titulo: 'Título 4',
    //       fechaInicio: '11/11/2023',
    //       fechaEntrega: '12/11/2023',
    //       asignatura: 'Asignatura 1',
    //       idAsignatura: 1,
    //       idUnidad: 1,
    //       unidad: 'Unidad',
    //       alumno: 'Juan Perez',
    //     },
    //     {
    //       idActividad: 5,
    //       idTema: 1,
    //       tema: 'Tema 5',
    //       titulo: 'Título 5',
    //       fechaInicio: '11/11/2023',
    //       fechaEntrega: '12/11/2023',
    //       asignatura: 'Asignatura 1',
    //       idAsignatura: 1,
    //       idUnidad: 1,
    //       unidad: 'Unidad',
    //       alumno: 'Juan Perez',
    //     },
    //   ]);
    // });
  }

  async getAlumnos(idActividad: number): Promise<any[]> {
    const parametros: IParametersFetchModel<any> = {
      url: '/actividad/alumno?idActividad=' + idActividad,
      httpMethod: HttpMethodsEnum.GET,
      body: null,
    };
    return await this.conexion.consumeAPI<any[]>(parametros);
    // return new Promise((resolve, reject) => {
    //   resolve([
    //     {
    //       idAlumno: 1,
    //       alumno: 'Juan Perez',
    //       nombreEntregable: 'Entregable 1.pdf',
    //       entregable: '',
    //       fechaEntrega: '10/11/2023',
    //       correo: 'JuanPerez@gmail.com',
    //     },
    //     {
    //       idAlumno: 2,
    //       alumno: 'Pedro Ramos',
    //       nombreEntregable: 'Entregable 2.pdf',
    //       entregable: '',
    //       fechaEntrega: '10/11/2023',
    //       correo: 'PedroRamos@gmail.com',
    //     },
    //     {
    //       idAlumno: 3,
    //       alumno: 'Rafael Marquez',
    //       nombreEntregable: 'Entregable 3.pdf',
    //       entregable: '',
    //       fechaEntrega: '10/11/2023',
    //       correo: 'RafaelMarquez@gmail.com',
    //     },
    //     {
    //       idAlumno: 4,
    //       alumno: 'Ericka Martinez',
    //       nombreEntregable: 'Entregable 4.pdf',
    //       entregable: '',
    //       fechaEntrega: '10/11/2023',
    //       correo: 'ErickaMartinez@gmail.com',
    //     },
    //     {
    //       idAlumno: 5,
    //       alumno: 'Margarita Hernandez',
    //       nombreEntregable: 'Entregable 5.pdf',
    //       entregable: '',
    //       fechaEntrega: '10/11/2023',
    //       correo: 'MargaritaHernandez@gmail.com',
    //     },
    //     {
    //       idAlumno: 6,
    //       alumno: 'Guadalupe Zavala',
    //       nombreEntregable: 'Entregable 6.docx',
    //       entregable: '',
    //       fechaEntrega: '10/11/2023',
    //       correo: 'GuadalupeZavala@gmail.com',
    //     },
    //   ]);
    // });
  }

  async insertUnidad(unidad: any): Promise<any[]> {
    const parametros: IParametersFetchModel<any> = {
      url: '/unidad/crear',
      httpMethod: HttpMethodsEnum.POST,
      body: unidad,
    };
    return await this.conexion.consumeAPI(parametros);
  }

  async insertActividad(unidad: any): Promise<any[]> {
    const parametros: IParametersFetchModel<any> = {
      url: '/actividad/crear',
      httpMethod: HttpMethodsEnum.POST,
      body: unidad,
    };
    return await this.conexion.consumeAPI(parametros);
  }

  async insertTema(tema: any): Promise<any[]> {
    const parametros: IParametersFetchModel<any> = {
      url: '/tema/crear',
      httpMethod: HttpMethodsEnum.POST,
      body: tema,
    };
    return await this.conexion.consumeAPI(parametros);
  }

  async calificar(datos: any): Promise<any[]> {
    const parametros: IParametersFetchModel<any> = {
      url: '/actividad/calificar',
      httpMethod: HttpMethodsEnum.POST,
      body: datos,
    };
    return await this.conexion.consumeAPI(parametros);
  }

}
