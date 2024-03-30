import { openDB } from 'idb';

// Initialize db connection
const initdb = async () => {
  await openDB('jate', 1, {
    upgrade(db) { 
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true});
        console.log('jate database created');
      }
    }
  });
}

initdb();

// Add content 
export const putDb = async (content) => {
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: 1, content});
  await request;
  console.log('Content added to the database');
};

// Get all content
export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const data = await store.getAll();
  return data;
};