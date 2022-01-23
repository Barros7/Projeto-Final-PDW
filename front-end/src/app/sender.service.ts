import { Injectable } from '@angular/core';
import { ResponseExpenses } from './resources/models/Expenses/ResponseExpenses';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  expenses: ResponseExpenses[] = [];
  constructor() { }

}
