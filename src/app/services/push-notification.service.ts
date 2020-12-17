import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PushNotificationsService {
    private baseURL =  environment.notificationURL;
    public snoozeTimeout =  null;

    constructor(private http: HttpClient) { }
//Notification functionality
    postSubscription (sub: PushSubscription, speciality, providerName) {
        return this.http.post(`${this.baseURL}/subscribe`, {sub, speciality, providerName});
    }

    postNotification (payload) {
        return this.http.post(`${this.baseURL}/push`, payload);
    }

}