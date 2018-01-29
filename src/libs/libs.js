export default {
  getStats(obj, parseKey, value) {
    
    let result  = [],
        temp    = {};
    
    for(let i = 0; i < obj.length; i++) {
      let timestamp = Date.parse(obj[i].date);
      let key = obj[i][parseKey].toLowerCase();
      
      if(!temp[timestamp]){
        temp[timestamp] = {};
      }
      
      if(temp[timestamp][key]) {
        temp[timestamp][key] += obj[i][value]
      }
      else {
        temp[timestamp][key] = obj[i][value]
      }
    }
    
    return temp;
  }
}
