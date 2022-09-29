import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  perpage;
  total;
  totalpages;
  data;

  constructor(private apiService: ApiService) {this.buscarTodos();}

  buscarTodos(page =2) {
    this.apiService.buscarUsuarios(page).subscribe(usuarios=> {
      console.log(usuarios);
      this.page = usuarios['page'];
      this.perpage = usuarios['per_page'];
      this.total = usuarios['total'];
      this.totalpages = usuarios['total_pages'];
      this.data = usuarios['data'];
    });
  }

}
