const cds = require('@sap/cds')

class ProcessorService extends cds.ApplicationService {
    init() {

        const { Incidents, Customers}       =   this.entities;

        // this.before("UPDATE", "Incidents", (req) => this.onUpdate(req));

        this.before("UPDATE", Incidents, this._onUpdate);

        this.before("CREATE", Incidents, this._onCreateUpdUrgency);

        return super.init();
    }

    // async onUpdate(req) {
    //     console.log("inside onUpdate file");
    //     let closed = await SELECT.one(1).from(req.subject).where`status.code = 'C'`
    //     if (closed) req.reject`Can't modify a closed incident!`
    // }

    async _onUpdate(req) {
        let closed  =   await SELECT.one(1) .from (req.subject) .where `status.code = 'C'`;

        console.log("Value of closed = ", closed);

        if(closed) {
            req.reject`We Can't modify a closed incident!`
        }
    }

    _onCreateUpdUrgency(req) {
        const  oInputdata       =   req.data;
        console.log("value of data = ", oInputdata);
        let bIsTitleUrgent  = oInputdata.title?.match(/urgent/i);

        if(bIsTitleUrgent) {
            oInputdata.urgency_code = 'H'
        }
    }
}

module.exports = { ProcessorService }