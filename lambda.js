const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "quizDetails-AD";
exports.handler = (event, context, callback) => {
 
    
var params = {
    TableName : tableName,
    Limit : 7000
   
};    
docClient.scan( params, function(err, data){
    if (err) {
       callback(err,null);
    } else {
        callback(null,data);
        }
    });
};

//https://0oqqwguet1.execute-api.us-east-1.amazonaws.com/test