/**
 * Mocking client-server processing
 */

const _request = [
    {"id": 3,  "status": "pending",   "title": "Благоустроить сквер за Университетом", "date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 55.754641, lng: 48.743629  }, "type": "idea" },
     {"id": 4,  "status": "completed",  "title": "Установить смотровую площадку в сквере возле кампуса\n", "date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ","location": {lat: 55.753168, lng: 48.738908  }, "type": "problem" },
     {"id": 5,  "status": "deleted",   "title": "Транслировать кино на стене спортивного комплекса\n", "date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ","location": {lat: 55.750752, lng: 48.741784  }, "type": "idea" },
     {"id": 6,  "status": "deleted",   "title": "Проложить пешеходные маршруты в лесу\n","date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 55.749641, lng: 48.737578  } , "type": "problem" },
     {"id": 7,  "status": "completed", "title": "Установить во внутреннем дворе офисного центра беседки\n","date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 55.751815, lng: 48.752427  } , "type": "idea"},
     {"id": 8,  "status": "pending",   "title": "Сделать во дворах нового жк современные детские площадки\n","date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 55.750076, lng: 48.7450881 } , "type": "idea"},
     {"id": 9,  "status": "pending",   "title": "Установить на бульваре арт-объект","date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": { lat: 55.747854, lng: 48.747277  } , "type": "problem"},
     {"id": 10, "status": "completed", "title": "Сделать водоем в парке \n","date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": { lat: 55.746598, lng: 48.741870 }, "type": "idea" },
     {"id": 11, "status": "pending",   "title": "Создать пространство для игр в парке","date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 55.745463, lng : 48.745217 } , "type": "problem"},
     {"id": 12, "status": "completed", "title": "Построить культурный центр", "date": "13.45.67", "time": "13:55", "sender": "Kevin Magnussen", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "location": {lat: 55.744134, lng: 48.749036 }, "type": "idea" }
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
