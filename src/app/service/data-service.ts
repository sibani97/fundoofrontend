import { BehaviorSubject } from 'rxjs';
import { NoteService } from './note-service';

export class DataService {

    private obtainNotes = new BehaviorSubject([]);
    currentNotes = this.obtainNotes.asObservable();  
    constructor(private noteService:NoteService){
        this.getPinNotes();
        this.getUnpinNotes();
        
    }

    getPinNotes()
    {
        this.noteService.getRequest("note/getPin").subscribe(
            (response:any)=>{
                this.obtainNotes.next(response);
            }
            
        );

    }

       
    getUnpinNotes()
    {
        this.noteService.getRequest("note/getUnPin").subscribe(
            (response:any)=>{
                this.obtainNotes.next(response);
            }
            
        );

    }

}
