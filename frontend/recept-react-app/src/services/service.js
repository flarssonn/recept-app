import $ from 'jquery'

class Service {

  static get(url){
    return this.dbservice('GET', url, null)
  }
  static post(url, data){
    return this.dbservice('POST', url, data)
  }
  static dbservice(type, url, data){
    return $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      type: type,
      data: data,
      success: function(data) {
        console.log("Success")
      },
      error: function(err) {
        console.log(err);
      }
    }).done( function(data) {
      return data
    })
  }

}

export default Service
