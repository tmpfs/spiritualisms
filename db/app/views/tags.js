/* jshint ignore:start */
module.exports = {
  map: function(doc) {
    if(doc.type === 'quote'
      && doc.publish === true
      && Array.isArray(doc.tags)) {
      doc.tags.forEach(function(tag){
        emit(tag); 
      })
      //emit(doc._id, null);
    }
  },
  reduce: '_count'
}
/* jshint ignore:end */
