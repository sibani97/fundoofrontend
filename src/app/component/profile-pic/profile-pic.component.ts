import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  croppedImage: any = '';
  imageChangedEvent: any = '';
  constructor(public dialogRef: MatDialogRef<ProfilePicComponent>) { }

  ngOnInit() {
  }

  fileChangedEvent(event: any): void {
    console.log("FileChangedEvent",event);
    this.imageChangedEvent = event;
  }

  imageCropped(event: any) {
    console.log("Image cropped:",event);
    this.croppedImage = event;
  }

  setImage(event: any) {
    // console.log("setImage:",event);
    // this.dialogRef.close(event);
    if (this.croppedImage != null) {
      this.dialogRef.close(this.croppedImage);

    }

  }
  close() {
    this.dialogRef.close();
  }
}
