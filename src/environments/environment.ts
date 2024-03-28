// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // baseUrl: 'http://localhost:5000/api/',
    baseUrl: 'http://192.168.1.31:4003',

    // scope 3 url
    // baseUrl: 'http://13.200.247.29:4000',
    // baseUrl: 'http://192.168.1.49:5000/api/',
    //baseUrl: 'http://ec2-13-232-86-195.ap-south-1.compute.amazonaws.com/api/',

    // baseUrl: 'http://ec2-3-110-200-97.ap-south-1.compute.amazonaws.com/api/',
    NoData: 'No Data Point',
    none: 'none',
    flex: 'flex',
    block: 'block',
    // pending: 'pending',
    pending: 'Pending',

    approved: 'Approved',
    rejected: 'Rejected',
    nullData: 'Null Data',
    DataEntrySaved: 'Data Entry Saved',
    NoEntry: 'No Entry',
    EntrySended: 'Sended',
    SuperAdmin: 'Super Admin',
    PAadmin: 'Platform Admin',
    Preparer: 'Preparer',
    Admin: 'Admin',
    Manager: 'Manager',
    Approver: 'Approver',
    TodaysDate: Date(),
    Updated: 'Updated',
    SendEntryMessage: 'New Approval',
    SendAcceptMessage: 'Request Accepted',
    SendRejectMessage: 'Request Rejected',
    brsrMessage: 'BRSR QA Entry recieved for tenant',
    expireMessage: 'Your plan will be expire in ',
    expirMessageAgo: 'Your plan already expired ',
    brsrAcceptMessage: 'BRSR doc accepted by ',
    brsrRejectMessage: 'BRSR doc rejected by ',
    brsrdocMessage: 'Document uploaded for brsr please check!',

    //   <<<-- This ID Belongs to Admin --->>
    adminRoleId: '525debfd-cd64-4936-ae57-346d57de3585'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
