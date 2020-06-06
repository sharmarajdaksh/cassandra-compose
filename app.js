const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
	contactPoints: ['127.0.0.1:9042'],
	localDataCenter: 'datacenter1',
});

const query = 'SELECT now() FROM system.local;';

client
	.execute(query)
	.then((result) => {
		console.log('\nCONNECTION SUCCESSFUL\n');
		console.log(result);
		process.exit(0);
	})
	.catch((err) => {
		console.log('\nCONNECTION FAILED\n');
		console.log(err);
	});
