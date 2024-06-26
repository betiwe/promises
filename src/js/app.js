import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((value) => new GameSaving(JSON.parse(value)))
      .catch((e) => console.log(e))
  }
}
