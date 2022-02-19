export default {
  mongo: {
    mechanism: 'SCRAM-SHA-1',
    database: 'stocked',
    tls: 'true',
    servers: ['cluster-shard-00-02.nwc8t.mongodb.net', 'cluster-shard-00-01.nwc8t.mongodb.net', 'cluster-shard-00-00.nwc8t.mongodb.net'],
  },
};
