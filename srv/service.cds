using { com.vxj03.learning as db } from '../db/schema';

service ProcessorService {

    entity Incidents  as projection on db.Incidents;

    @readonly
    entity Customers  as projection on db.Customers;

}

service AdminService  {
    entity AdmIncidents  as projection on db.Incidents;
    entity AdmCustomers  as projection on db.Customers;

}

annotate ProcessorService.Incidents with @odata.draft.enabled;
