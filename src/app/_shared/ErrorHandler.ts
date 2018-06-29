
import { ErrorHandler, Injectable} from '@angular/core';

//handle all application level errors here.
@Injectable()
export class ErrorsHandler implements ErrorHandler {
  handleError(error: Error) {
    console.error('Some error occured : ', error);
  }
}