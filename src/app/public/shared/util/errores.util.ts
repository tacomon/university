import { ResponseApiModel } from "../../model/response-api.model";

export class ErroresUtil {

  public static async getError<T>(promiseError: Promise<ResponseApiModel<T>|any>): Promise<any> {
    const error = await promiseError;
    console.error("Error al realizar la petición");
    if(error?.aditionalInfo) {
      console.error(error?.aditionalInfo);
    } else {
      console.error('Error generico')
    }
  }

}
