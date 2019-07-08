export default {

    create(key,value){
      return localStorage.setItem(key, JSON.stringify(value));
    },


    update(key,value){
      return localStorage.setItem(key,JSON.stringify(value));
    },

    read(key) {
           const data = localStorage.getItem(key);
           try {
               return JSON.parse(data);
           } catch (err) {
               return data;
           }
       },

    remove(key){
        return  localStorage.removeItem(key);
    }

};
