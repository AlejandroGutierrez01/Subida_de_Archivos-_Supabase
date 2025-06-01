import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient} from "@supabase/supabase-js"


@Injectable({
  providedIn: 'root'
})


export class SupabaseuploadService {
  supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);

  constructor() { }

  uploadFile(file: File, path:string){
    return this.supabaseClient.storage.from("documentstest").upload(path,file)
  }
}
