import { Injectable } from '@angular/core';
import { LoggerService } from './logger-service.service';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  constructor(
    private logger: LoggerService
  ) { }
}
