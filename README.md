Simple docker-compose for running an Apache Cassandra container.

To run the Cassandra container:
```bash
$ docker-compose up
```
You may add the `-d` flag to run it in the background.


To test if the container is up, you can run:
```bash
node app.js
```
If the container does come up successfully, the node app will connect and print something like:
```bash
CONNECTION SUCCESSFUL

ResultSet {
  info:
   { queriedHost: '127.0.0.1:9042',
     triedHosts: { '127.0.0.1:9042': null },
     speculativeExecutions: 0,
     achievedConsistency: 10,
     traceId: undefined,
     warnings: undefined,
     customPayload: undefined,
     isSchemaInAgreement: true },
  rows:
   [ Row {
       'system.now()': TimeUuid: 24ae9090-a80e-11ea-9c19-9116fc548b6b } ],
  rowLength: 1,
  columns: [ { name: 'system.now()', type: [Object] } ],
  pageState: null,
  nextPage: undefined,
  nextPageAsync: undefined }
```