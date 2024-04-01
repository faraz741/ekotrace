import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs/internal/Observable';
import { Facility } from '@/models/Facility';
import { Location } from '@/models/Location';
import { ManageDataPoint } from '@/models/ManageDataPoint';
import { savedDataPoint } from '@/models/savedDataPoint';
import { FacilityGroupList } from '@/models/FacilityGroupList';

@Injectable({
    providedIn: 'root'
})
export class FacilityService {
    localapiURL = 'http://192.168.1.31:4003';
    totalAngularPackages;
    errorMessage;
    constructor(
        private http: HttpClient,
        private notification: NotificationService
    ) { }
    options: {
        headers?: HttpHeaders | { [header: string]: string | string[] };
        observe?: 'body' | 'events' | 'response';
        params?:
        | HttpParams
        | {
            [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    };

    public FacilityDataPost(data): Observable<any> {
        return this.http.post(environment.baseUrl + 'Facilities/addFacility', data);
    }
    public newFacilityDataPost(data): Observable<any> {
        return this.http.post( environment.baseUrl +'/Addfacilities', data);
    }
    public FacilityDataPut(id, data): Observable<any> {
        return this.http.put(environment.baseUrl + 'Facilities/' + id, data);
    };

    public FacilityDataGet(tenantId): Observable<Facility[]> {
        return this.http.get<Facility[]>(
            environment.baseUrl + 'Group/facility/GroupByData/' + tenantId
        );
    };
    public nFacilityDataGet(): Observable<Facility[]> {
        return this.http.get<Facility[]>(
            'http://192.168.1.31:4003/allfacilitiesbyRole'
        );
    };
    public newFacilityDataGet(tenantId): Observable<Facility[]> {
        return this.http.get<Facility[]>(
            environment.baseUrl + 'Group/facility/GroupByData/' + tenantId
        );
    };
    public FacilityDelete(id): Observable<any> {
        return this.http.delete(environment.baseUrl + 'Facilities/' + id);
    }
    public GetCountry(): Observable<Location[]> {
        return this.http.get<Location[]>(
            this.localapiURL + '/getcountries'
        );
    }
    public GetState(id): Observable<Location[]> {
        return this.http.get<Location[]>(
            environment.baseUrl + 'Facilities/State/' + id
        );
    }
    public newGetState(data): Observable<Location[]> {
        return this.http.post<Location[]>(
            this.localapiURL  + '/getstateByCountries', data
        );
    }
    public GetCity(id): Observable<Location[]> {
        return this.http.get<Location[]>(
            environment.baseUrl + 'Facilities/City/' + id
        );
    };
    public newGetCity(id): Observable<Location[]> {
        return this.http.post<Location[]>(
            this.localapiURL + '/getcityBystate' , id
        );
    };

    public getSeedData(): Observable<ManageDataPoint[]> {
        return this.http.get<ManageDataPoint[]>(
            environment.baseUrl + 'Facilities/facility/getSeedData'
        );
    }
    public getNewSeedData(): Observable<ManageDataPoint[]> {
        return this.http.get<ManageDataPoint[]>(
           'http://192.168.1.31:4003/GetcategoryByScope'
        );
    }

    public ManageDataPointSave(data: any): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Facilities/facility/SaveManageDataPoint',
            data
        );
    }
    public newManageDataPointSave(data: any): Observable<any> {
        return this.http.post(
            'http://192.168.1.31:4003/AddassignedDataPointbyfacility',
            data
        );
    }
    public getSavedDataPoint(facilityID: any): Observable<savedDataPoint[]> {
        return this.http.get<savedDataPoint[]>(
            environment.baseUrl +
            'Facilities/facility/getManageDataPointbyfacility/' +
            facilityID
        );
    }

    public GetFacilityGroupList(tenantId) {
        return this.http.get<FacilityGroupList[]>(
            environment.baseUrl + 'Facilities/GetFacilityGroups/' + tenantId
        );
    }
    public newGetFacilityGroupList(tenantId) :Observable<any>{
        return this.http.get<any>(
            environment.baseUrl + '/GetFacilityGroups/' + tenantId
        );
    }
    public GetFacilityByID(Id) {
        return this.http.get<Facility>(
            environment.baseUrl + 'Facilities/' + Id
        );
    };
    public newUsersByFacilityID(Id) {
        return this.http.post<Facility>(
            'http://192.168.1.31:4003/allfacilitiesbyId' , Id
        );
    };
}