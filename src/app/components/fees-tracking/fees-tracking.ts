import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPaymentColor } from '../../directive/add-payment-color';

@Component({
  selector: 'app-fees-tracking',
  imports: [FormsModule, AddPaymentColor],
  templateUrl: './fees-tracking.html',
  styleUrl: './fees-tracking.css'
})
export class FeesTracking implements OnInit {


  @ViewChild('newModal') modal!: ElementRef;
  newEnrolObj: NewEnrollment = new NewEnrollment();
  http = inject(HttpClient);
  dashBoardData!: IDashboard;

  filterObj: any = {
    "batchid": 0,
    "status": "",
    "search": ""
  }

  batchList: any[] = [];


  enrollmentList = signal<any[]>([]);

  ngOnInit(): void {
    this.getAllBatches();
    this.getAllEnrollments();
    this.getDashBoardData();
  }

  getDashBoardData() {
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/GetDashboardStats").subscribe({
      next: (result: any) => {
        this.dashBoardData  = result
      }
    })
  }

  getAllBatches() {
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/batches").subscribe({
      next: (result: any) => {
        this.batchList = result
      }
    })
  }

  onSearch() {
    this.http.post("https://api.freeprojectapi.com/api/FeesTracking/FilterEnrollments", this.filterObj).subscribe({
      next: (result: any) => {
        this.enrollmentList.set(result)
      }
    })
  }

  createNewEnrollment() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/FeesTracking/addNewEnrollment", this.newEnrolObj).subscribe({
      next: (result: any) => {
        debugger;
        alert("Enrollment Success");
        this.enrollmentList.update(oldList => ([...oldList, result]))

      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  updateEnrollment() {
    this.http.put("https://api.freeprojectapi.com/api/FeesTracking/updateEnrollment?id=" + this.newEnrolObj.enrollmentId, this.newEnrolObj).subscribe({
      next: (result: any) => {
        debugger;
        alert("Enrollment Update Success");
        this.getAllEnrollments();
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to do Soft Delete");
    if (isDelete) {
      this.http.delete("https://api.freeprojectapi.com/api/FeesTracking/SoftDeleteById?id=" + id).subscribe({
        next: (result: any) => {
          debugger;
          alert("Enrollment Update Success");
          this.getAllEnrollments();
        },
        error: (error) => {
          alert(error.error)
        }
      })
    }

  }

  getAllEnrollments() {
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/getAllEnrollments").subscribe({
      next: (res: any) => {
        this.enrollmentList.set(res)
      }
    })
  }


  openModel() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block'
    }
  }

  onClose() {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none'
    }
  }

  onEdit(data: any) {
    this.newEnrolObj = data;
    this.openModel()
  }

  getFeesStatus(data: any) {
    console.log("getFeesStatus")
    if (data.totalFees == data.totalReceived) {
      return 'row-full-paid'
    } else if (data.totalReceived == 0) {
      return 'row-not-paid'
    } else {
      return 'row-partial-paid'
    }
  }
}
class NewEnrollment {
  enrollmentId: number;
  studentName: string;
  contactNo: string;
  totalFees: number;
  emi1: string;
  emi2: number;
  emi3: number;
  totalReceived: number;
  status: string;
  isSoftDelete: boolean;
  batchId: number;

  constructor() {
    this.batchId = 0;
    this.enrollmentId = 0;
    this.contactNo = '';
    this.studentName = '';
    this.totalFees = 0;
    this.emi1 = '';
    this.emi2 = 0;
    this.emi3 = 0;
    this.totalReceived = 0;
    this.status = '';
    this.isSoftDelete = true;
  }
}

interface IDashboard {
  totalbatches: number;
  totalamounttobereceived: number;
  totalreceived: number;
  totalpending: number;
  batchwisestats: IBatchWisePayment[]
}

interface IBatchWisePayment {
  batchid: number;
  batchname: string;
  totalamount: number;
  totalreceived: number;
  totalpending: number;
}