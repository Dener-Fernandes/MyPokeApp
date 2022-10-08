import { v4 as uuidV4 } from "uuid";

class Pokemon {
  id?: string | undefined;
  name: string | undefined;
  image: string | undefined;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Pokemon };