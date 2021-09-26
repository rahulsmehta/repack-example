/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { ChunkManager } from '@callstack/repack/dist/client/chunks-api/ChunkManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

ChunkManager.configure({
    // storage: AsyncStorage,
    resolveRemoteChunk: async (chunkId) => {
        const url = `http://localhost:5000/${chunkId}.chunk.bundle`;
        console.warn(url);
        return { url, excludeExtension: true, };
    },
    forceRemoteChunkResolution: true,
  });
  

AppRegistry.registerComponent(appName, () => App);
