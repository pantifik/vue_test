export default {
  getStats(obj) {
    if(!Array.isArray(obj)) return obj;
    
    let result = {};
    
    for(let i = 0; i < obj.length; i++) {
      let timestamp = Date.parse(obj[i].date);
     
      
      if(!result[timestamp]){
        result[timestamp] = {};
      }
      
      for(let key in obj[i]){
        if(key != 'date'){
          if(result[timestamp][key]){
            result[timestamp][key] += +obj[i][key];
          }
          else{
            result[timestamp][key] = +obj[i][key];
        }
        
      }
      }
    }
    
    return result;
  },
  
  getStatsSum(obj){
    let result  = {},
        data    = this.getStats(obj);
    
    for(let itemKey in data){
      for(let key in data[itemKey]){
        if(!(key in result)){
          result[key] = 0;
        }
        result[key] += +data[itemKey][key];
      }
    }
    return result;
  },
}
