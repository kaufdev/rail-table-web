import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transfer } from '../model/transfer.model';

@Injectable({
    providedIn: 'root',
})
export class SharedService{
    private transferStream: BehaviorSubject<Transfer[]> = new BehaviorSubject<Transfer[]>(null);
    private resetSearchScreenStream  = new BehaviorSubject<boolean>(null);

    pushTransfers(transfers: Transfer[]): void{
        this.transferStream.next(transfers);
    }

    getTransferStream(): BehaviorSubject<Transfer[]>{
        return this.transferStream;
    }

    resetSearchScreen(){
      this.resetSearchScreenStream.next(true);
    }


    checkResetSearchScreen() {
      return this.resetSearchScreenStream.asObservable();
    }
}
