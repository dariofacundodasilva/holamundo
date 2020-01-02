import { WebPlugin } from '@capacitor/core';
import { HolaMundoPlugin } from './definitions';

export class HolaMundoWeb extends WebPlugin implements HolaMundoPlugin {
  constructor() {
    super({
      name: 'HolaMundo',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const HolaMundo = new HolaMundoWeb();

export { HolaMundo };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HolaMundo);
