const couchbase = require("couchbase");

// For a secure cluster connection, use `couchbases://<your-cluster-ip>` instead.
const clusterConnStr = "couchbase://localhost";
const username = "admin";
const password = "123456";
const bucketName = "default";

const cluster = new couchbase.Cluster(clusterConnStr, {
  username: username,
  password: password,
});

const bucket = cluster.bucket(bucketName);
const collection = bucket.defaultCollection();

module.exports = { collection: collection, cluster: cluster, bucket: bucket };
