import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public values:any = [];	
  public searchValue:string="";
  public searchOther:string="";
  constructor(private _service:LoggerService) { }

  ngOnInit() {
	this._service.getData().subscribe(data => this.values = data);
  }  

 
  searchForValue()
  {
	if(this.searchValue.length>=3)
	{
		if(this.searchValue != ""){
  			this.values=this.values.filter(res=> {
	  		  return res.value.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
			});
		}
	}
	if(this.searchValue==""){
		this.ngOnInit();
	}

  }

  searchForOther()
  {
	if(this.searchOther.length>=3)
	{
		if(this.searchOther != ""){
  			this.values=this.values.filter(res=> {
	  		  return (res.display.toLocaleLowerCase().match(this.searchOther.toLocaleLowerCase())) || (res.desc.toLocaleLowerCase().match(this.searchOther.toLocaleLowerCase()));
			});
		}
	}
	if(this.searchOther==""){
		this.ngOnInit();
	}
  }

}