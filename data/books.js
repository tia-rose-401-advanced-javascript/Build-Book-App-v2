'use strict';

const schema = require('./books.schema');

class Books{
  constructor(){

  }
  get(_id){
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }

  getBookByName(title){
    let queryObject = {title};
    return schema.find(queryObject);
  }

  post(entry){
    let record = new schema(entry);
    return record.save();
  }
  put(_id, record){
    return schema.findByIdAndUpdate(_id, record, {new:true});
  }
  delete(_id){
    return schema.findByIdAndDelete(_id);
  }
}

module.exports = new Books(schema);
