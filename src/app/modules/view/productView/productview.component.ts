import {Component, OnInit} from '@angular/core';
import { ProductsServices } from 'src/app/core/services/product.services';

@Component({
  selector: 'viewproduct',
  templateUrl: './productview.component.html'
})
export class ViewProductComponent implements OnInit {
  listproduct: any
  pageDefaul: any
  resultList: any = {};
  pages = []
  constructor(
    private productsServices: ProductsServices
  ) {
    this.pageDefaul = 1
    this.searchAllProduct();
  }
  ngOnInit() {
  }
  
  searchAllProduct(){
    const formSearch = {}
    formSearch["page"] = this.pageDefaul
    formSearch["pageSize"] = 10,
    this.productsServices.getDatatable(formSearch).subscribe(res =>{
      this.resultList = res.data
      const pagesCount = []
      debugger
      for(let j = 0; j<res.pages; j++){
        pagesCount.push({page: j+1})
      }
      this.pages = pagesCount
      console.log(pagesCount)
      for(let i = 0; i<this.resultList.length; i++){
        this.resultList[i]["style"] = this.resultList[i].progress + "%";
        if(this.resultList[i].progress < 40){
          this.resultList[i]["class"] = "progress-bar bg-danger"
        }else if(this.resultList[i].progress < 60){
          this.resultList[i]["class"] = "progress-bar bg-warning"
        }else if(this.resultList[i].progress < 80) {
          this.resultList[i]["class"] = "progress-bar bg-info"
        }else{
          this.resultList[i]["class"] = "progress-bar bg-success"
        }
      }
      console.log(res.data)
    })
  }

  changPage(item){
    this.pageDefaul = item
    this.searchAllProduct()
  }



  
}

