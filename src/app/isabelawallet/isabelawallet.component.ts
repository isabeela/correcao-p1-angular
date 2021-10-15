import { Component, OnInit } from '@angular/core';
import { IsabelawalletService } from '../isabelawallet.service';

@Component({
  selector: 'app-isabelawallet',
  templateUrl: './isabelawallet.component.html',
  styleUrls: ['./isabelawallet.component.css'],
})
export class IsabelawalletComponent implements OnInit {
  newValue = 0;
  constructor(public walletService: IsabelawalletService) {}

  ngOnInit() {}

  adicionar() {
    this.walletService.meuBit = this.walletService.meuBit + this.newValue;
    this.newValue = 0;
  }

  subtrair() {
    this.walletService.meuBit = this.walletService.meuBit - this.newValue;
    this.newValue = 0;
  }

  getBRL() {
    return (
      this.walletService.meuBit *
      this.walletService.currentPrince.bpi.BRL.rate_float
    );
  }

  getUSD() {
    return (
      this.walletService.meuBit *
      this.walletService.currentPrince.bpi.USD.rate_float
    );
  }

  getEUR() {
    return (
      this.walletService.meuBit *
      this.walletService.currentPrince.bpi.EUR.rate_float
    );
  }
}
