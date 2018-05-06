import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class Agreement {

    agreementDate: String = null;
    employer: String = null;
  employerProvince: String = null;
  employerLocation: String = null;
  employee: String = null;
  position: String = null;
  jobType: String = null;
  salary: String = null;
  confRequired: String = null;
  vacation: String = null;
  probRequired: String = null;
  porobationPeriod: String = null;
  noticePeriod: String = null;
  severence: String = null;

  constructor() { 
      this.agreementDate = this.agreementDate;
      this.employer = this.employer;
      this.employerProvince = this.employerProvince;
      this.employerLocation = this.employerLocation;
      this.employee = this.employee;
      this.position = this.position;
      this.jobType = this.jobType;
      this.salary = this.salary;
      this.confRequired = this.confRequired;
      this.vacation = this.vacation;
      this.probRequired = this.probRequired;
      this.porobationPeriod = this.porobationPeriod;
      this.noticePeriod = this.noticePeriod;
      this.severence = this.severence;
  }

  ngOnInit() {
  }
}

