
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/Model/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  durationInSeconds = 5;

  constructor(public dialogRef: MatDialogRef<any>, private _snackBar: MatSnackBar, private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
  
  }

  updateUser() {
    this.userService.UpdateUser(this.data).subscribe()
    this._snackBar.open("User modified!!"), "", {
    }
  }

}


