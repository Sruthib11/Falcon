public with sharing class GetAllOpportunities {
  @AuraEnabled(cacheable=true)
  public static List<Job__C> getAllOpps() {
    return [
      SELECT
        Name,
        customer__c,
        Schedule_start_date__c,
        Schedule_end_date__c,
        Stage__c,
        Total__c,
        Payment_received__c
      FROM JOB__C
      LIMIT 10
    ];
  }
}
