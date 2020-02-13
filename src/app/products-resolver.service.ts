import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { retry, catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productsService.getProducts().pipe(
      catchError((error) => {
        return empty();
      })
    );
  }


}