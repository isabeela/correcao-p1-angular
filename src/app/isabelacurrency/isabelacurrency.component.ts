import { Component, OnInit } from '@angular/core';
import { IsabelawalletService } from '../isabelawallet.service';

@Component({
  selector: 'app-isabelacurrency',
  templateUrl: './isabelacurrency.component.html',
  styleUrls: ['./isabelacurrency.component.css'],
})
export class IsabelacurrencyComponent implements OnInit {
  constructor(public walletService: IsabelawalletService) {}

  ngOnInit() {}
}
