import GameSavingLoaderAsync from "../async";

test("Создается класс GameSaving", async () => {
  let data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  return expect(await GameSavingLoaderAsync.load()).toEqual(data);
});