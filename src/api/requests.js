/**
 * Mocking client-server processing
 */

const _request = [
    {"id": 1, "status": "pending", "title": "Нет укрытий от солнца и ветра в сквере у кампуса", "date": "13.45.67", "time":"13:55", "sender": "Сергей Чуплыгин", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 2, "status": "completed", "title": "Непонятные навигационные указатели", "date": "13.45.67", "time":"13:55", "sender": "Юлия Шадрина", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 3, "status": "discussed", "title": "Отсутствуют места для отдыха во внутреннем дворе офисного центра", "date": "13.45.67", "time":"13:55", "sender": "Дмитрий Чернышов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 4, "status": "ignored", "title": "Низкое качество дорожного покрытия, провалы в асфальте", "date": "13.45.67", "time":"13:55", "sender": "Антон Кузнецов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 5, "status": "pending", "title": "Велосипедная дорожка обрывается", "date": "13.45.67", "time":"13:55", "sender": "Михаил Свердлов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 6, "status": "completed", "title": "Засыхают деревья", "date": "13.45.67", "time":"13:55", "sender": "Анна Прохоренко", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 7, "status": "discussed", "title": "Недостаточно света во дворе", "date": "13.45.67", "time":"13:55", "sender": "Андрей Кожевников", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 8, "status": "ignored", "title": "Нехватает велосипедных парковок", "date": "13.45.67", "time":"13:55", "sender": "Ксения Демченко", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 9, "status": "pending", "title": "Не благоустроена центральная территория парка", "date": "13.45.67", "time":"13:55", "sender": "Мария Щевелева", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 10, "status": "completed", "title": "Не хватает питьевого фонтанчика возле спортивных площадок", "date": "13.45.67", "time":"13:55", "sender": "Тимур Рамазанов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "problem"},
    {"id": 11, "status": "discussed", "title": "Благоустроить сквер за Университетом", "date": "13.45.67", "time":"13:55", "sender": "Роман Гаврилов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 12, "status": "ignored", "title": "Установить смотровую площадку в сквере возле кампуса", "date": "13.45.67", "time":"13:55", "sender": "Лейсан Василова", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 13, "status": "pending", "title": "Транслировать кино на стене спортивного комплекса", "date": "13.45.67", "time":"13:55", "sender": " Максим Милованов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 14, "status": "completed", "title": "Проложить пешеходные маршруты в лесу", "date": "13.45.67", "time":"13:55", "sender": "Игорь Зубов", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 15, "status": "discussed", "title": "Установить во внутреннем дворе офисного центра беседки", "date": "13.45.67", "time":"13:55", "sender": "Наталья Борисова", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 16, "status": "ignored", "title": "Сделать во дворах нового жк современные детские площадки", "date": "13.45.67", "time":"13:55", "sender": "Станислав Диденко", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 17, "status": "pending", "title": "Установить на бульваре арт-объект", "date": "13.45.67", "time":"13:55", "sender": "Вероника Сабитова", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 18, "status": "completed", "title": "Сделать водоем в парке", "date": "13.45.67", "time":"13:55", "sender": " Владимир Марочко", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 19, "status": "discussed", "title": "Создать пространство для игр в парке", "date": "13.45.67", "time":"13:55", "sender": "Регина Курбанова", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
    {"id": 20, "status": "ignored", "title": "Построить культурный центр", "date": "13.45.67", "time":"13:55", "sender": "Гузель Габдуллина", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  consequat.", "location": {lat: 55.753168, lng: 48.738908  }, "type": "idea"},
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
