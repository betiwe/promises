import json from "./parser";
import read from "./reader";
import GameSaving from "./GameSaving";

export default class GameSavingLoaderAsync {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return new GameSaving(JSON.parse(value));
    } catch {
      return new Error("Error");
    }
  }
}
