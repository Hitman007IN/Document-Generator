import { Component, OnInit } from '@angular/core';
import { Agreement } from '../agreement.model';
import { NilaTransactionService } from '../nila-transaction.service';
import { debug } from 'util';

@Component({
  selector: 'app-agreement-generator',
  templateUrl: './agreement-generator.component.html',
  styleUrls: ['./agreement-generator.component.scss']
})

export class AgreementGeneratorComponent implements OnInit {
  
  btnText: string = 'Click to Generate Document';
  agreementDate: String;
  employer: String;
  employerProvince: String;
  employerLocation: String;
  employee: String;
  position: String;
  jobType: String;
  salary: String;
  confRequired: String;
  vacation: String;
  probRequired: String;
  porobationPeriod: String;
  noticePeriod: String;
  severence: String;
  agmnt: Agreement = new Agreement();

  constructor(private _transaction: NilaTransactionService) { 

  }

  ngOnInit() {
  }

  generate(){
    this.agmnt.agreementDate = this.agreementDate;
    this.agmnt.employer = this.employer;
    this.agmnt.employerProvince = this.employerProvince;
    this.agmnt.employerLocation = this.employerLocation;
    this.agmnt.employee = this.employee;
    this.agmnt.position = this.position;
    this.agmnt.jobType = this.jobType;
    this.agmnt.salary = this.salary;
    this.agmnt.confRequired = this.confRequired;
    this.agmnt.vacation = this.vacation;
    this.agmnt.probRequired = this.probRequired;
    this.agmnt.porobationPeriod = this.porobationPeriod;
    this.agmnt.noticePeriod = this.noticePeriod;
    this.agmnt.severence = this.severence;
    
    this._transaction.generateDocument(this.agmnt)

  }

}
