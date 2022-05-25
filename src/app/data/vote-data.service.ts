import { Injectable } from '@angular/core';
import { DataService } from './base/data.service';
import { Observable } from 'rxjs';
import { SharedDataService } from './base/shared-data.service';
import { SaveLikeRequest } from '../models/comms/save-like-request';
import { LikeSummary } from '../models/like-summary';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteDataService extends DataService {

    constructor(
        sharedData: SharedDataService
    ) { super(sharedData); }

    public async save(vote: Vote): Promise<Vote> {
        return await this.sharedData.post<Vote>(`${this.baseUrl}/private/votes`, vote, this.options());
    }
}
