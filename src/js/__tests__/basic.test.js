import GameSavingLoader from "../app";

test('Создается класс GameSaving', () => {
  let data = {
    "id": 9,
    "created": 1546300800, 
    "userInfo": {
      "id": 1, 
      "name": 'Hitman', 
      "level": 10, 
      "points": 2000 
    }
  }
  return GameSavingLoader.load().then((value) => expect(value).toEqual(data));
})

