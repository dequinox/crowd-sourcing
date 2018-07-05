/**
 * Mocking client-server processing
 */

const _request = [
  {"id": 1,  "status": "pending",   "title": "Bottas wins Canadian Grand Prix", "date": "19/12/97", "time": "13:55", "sender": "Darius Umarov", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",  "image": "bottas.jpg", "type": "idea"},
  {"id": 2,  "status": "completed", "title": "Formula 1 for the next 3 weeks", "date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 20, lng: 30}, "image": "../assets/f1.jpg", "type": "idea" },
  {"id": 13, "status": "deleted",   "title": "Huge crash - Sebasitan Vettel and Lewis Hamilton", "date": "45/12/34", "time": "13:55", "sender": "Kimi Raikonnen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 30, lng: 40}, "image": "../assets/crash.jpg", "type": "problem"},
  {"id": 3,  "status": "pending",   "title": "Благоустроить сквер за Университетом", "date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 19.192936032137368, lng: 35.03235986083746  }, "type": "idea" },
  {"id": 4,  "status": "completed",  "title": "Установить смотровую площадку в сквере возле кампуса\n", "date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ","location": {lat: 358107.473238778009545, lng: 6180923.648520747199655  }, "type": "problem" },
  {"id": 5,  "status": "deleted",   "title": "Транслировать кино на стене спортивного комплекса\n", "date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ","location": {lat: 358283.830301510693971, lng: 6180658.984567675739527  }, "type": "idea" },
  {"id": 6,  "status": "deleted",   "title": "Проложить пешеходные маршруты в лесу\n","date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 357960.72267823072616, lng: 6180549.655175839550793  } , "type": "problem" },
  {"id": 7,  "status": "completed", "title": "Установить во внутреннем дворе офисного центра беседки\n","date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 358933.541622775897849, lng: 6180764.91718172468245  } , "type": "idea"},
  {"id": 8,  "status": "pending",   "title": "Сделать во дворах нового жк современные детские площадки\n","date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 358484.554440272273496, lng: 6180551.755224889144301 } , "type": "idea"},
  {"id": 9,  "status": "pending",   "title": "Установить на бульваре арт-объект","date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": { lat: 358615.891613120562397, lng: 6180305.333656318485737  } , "type": "problem"},
  {"id": 10, "status": "completed", "title": "Сделать водоем в парке \n","date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": { lat: 358266.287123561720364, lng: 6180194.435228395275772 }, "type": "idea" },
  {"id": 11, "status": "pending",   "title": "Создать пространство для игр в парке","date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 358470.937024733517319, lng : 6180059.49389058444649 } , "type": "problem"},
  {"id": 12, "status": "completed", "title": "Построить культурный центр", "date": "13/45/67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 358686.939702523406595, lng: 6179903.808879360556602 }, "type": "idea" }
]

export default {
  getRequests (cb) {
    setTimeout(() => cb(_request), 1000)
  }

  /*buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
}*/
}
