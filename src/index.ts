import { resolve } from 'path';
import { Alias, Plugin, UserConfig } from 'vite'

export function aframeThreePlugin(): Plugin {
  return {
    name: 'vite-plugin-aframe-three:resolveId',
    config(config: UserConfig, env): UserConfig {
      return {
        resolve: {
          alias: [<Alias>{
            find: 'three',
            replacement: 'super-three',
            customResolver: (source: string, importer: string) => {
              if(source === 'super-three') {
                return resolve(__dirname, 'fake-three.js');
              }
            }
          }]
        }
      }
    }
  };
}

export default aframeThreePlugin;