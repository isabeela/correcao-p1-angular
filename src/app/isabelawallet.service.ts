import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs/operators';

interface Response {
  time: {
    update: string;
  };
  bpi: {
    BRL: {
      rate: string;
      rate_float: number;
    };

    USD: {
      rate: string;
      rate_float: number;
    };

    EUR: {
      rate: string;
      rate_float: number;
    };
  };
}


interface EurBitCoinRate{
  time: {
    updated: string
  };
  bpi: {
    BRL: {
      rate_float: number
    }
  }
}



interface PriceUpdate {
  timestamp: Date;
  BRL: number;
  USD: number;
  EUR: number;
  BTC: number;
}

@Injectable()
export class IsabelawalletService {
  currentPrince: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];

  meuBit = 0;

  constructor(private http: HttpClient) {
    this.update();
    setInterval(() => {
      this.update();
    }, 20000);
  }

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();
        this.currentPrince = data;
        this.updateList.push({
          timestamp: this.lastUpdate,
          BRL: this.currentPrince.bpi.BRL.rate_float,
          USD: this.currentPrince.bpi.USD.rate_float,
          EUR: this.currentPrince.bpi.BRL.rate_float,
          BTC: this.currentPrince.bpi.BRL.rate_float,
        });
      });
  }

  getCotacao() {
    if (!this.currentPrince) {
      return 0;
    }
    let valorAtual = this.currentPrince.bpi.BRL.rate_float;
    let valorIniciio = this.updateList[0].BRL;
    return 100 * ((valorAtual - valorIniciio) / valorIniciio);
  }
}
