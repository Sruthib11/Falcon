import { LightningElement, wire, track } from "lwc";
import getAllOpps from "@salesforce/apex/GetAllOpportunities.getAllOpps";

export default class DatatableEx12 extends LightningElement {
  @track columns = [
    {
      label: "JOB Name",
      fieldName: "Name",
      type: "text",
      sortable: true
    },
    {
      label: "Customer",
      fieldName: "customer__c",
      type: "text",
      sortable: true
    },
    {
      label: "Schedule start date",
      fieldName: "Schedule_start_date__c,",
      type: "date",
      sortable: true
    },
    {
      label: "Schedule end date",
      fieldName: "Schedule_end_date__c,",
      type: "date",
      sortable: true
    },
    {
      label: "Stage",
      fieldName: "Stage__c",
      type: "text",
      sortable: true
    },
    {
      label: "Total",
      fieldName: "Total__C",
      type: "number",
      sortable: true
    },
    {
      label: "Payment received",
      fieldName: "Payment_received__c",
      type: "number",
      sortable: true
    }
  ];
  @track error;
  @track data;
  @wire(getAllOpps)
  wiredOpps({ error, data }) {
    if (data) {
      this.data = data;
      // eslint-disable-next-line no-console
      console.log(data);
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(data, null, "\t"));
    } else if (error) {
      this.error = error;
    }
  }
}
