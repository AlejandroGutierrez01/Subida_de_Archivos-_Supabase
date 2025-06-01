import { Component } from '@angular/core';
import { SupabaseuploadService } from '../services/supabaseupload.service';
import { IonicModule } from "@ionic/angular"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  selectedFile?: File;

  constructor(private supabaseService: SupabaseuploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    if (this.selectedFile) {
      const { data, error } = await this.supabaseService.uploadFile(
        this.selectedFile,
        `uploads/${this.selectedFile.name}`
      );
      if (error) {
        alert('Error al subir archivo: ' + error.message);
      } else {
        alert('Archivo subido correctamente!');
      }
    }
  }
}

