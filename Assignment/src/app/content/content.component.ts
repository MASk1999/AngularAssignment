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
	if(this.searchValue.length<=2 || this.SearchValue.includes('   ')
	{
		this._service.getData.subscribe(data => this.values = data);
	}
	else
	{
		this.values=this.values.filter(res=> {
	  	  return (res.value.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
		});		
	}
  }

  searchForOther()
  {
	if(this.searchOther.length<=2 || this.searchOther.includes('   '))
	{
		this._service.getData().subscribe(data => this.values = data);		
	}
	else
	{
		this.values=this.values.filter(res=> {
	  	  return (res.display.toLocaleLowerCase().match(this.searchOther.toLocaleLowerCase())) || (res.desc.toLocaleLowerCase().match(this.searchOther.toLocaleLowerCase()));
		});
	}
  }

}