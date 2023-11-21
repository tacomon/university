import { HttpMethodsEnum } from "../shared/constantes/http-methods.enum";

export interface IParametersFetchModel<T> {
  url: string;
  httpMethod: HttpMethodsEnum;
  body: T
}
