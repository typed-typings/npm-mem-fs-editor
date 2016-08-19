import test = require('blue-tape');

import memFs = require('mem-fs');
import memFsEditor = require('mem-fs-editor');

test('shape', t => {
  const store = memFs.create();
  const editor = memFsEditor.create(store);
  t.true(editor, 'created editor');
  t.true(editor.read, 'read method');
  t.true(editor.readJSON, 'readJSON method');
  t.end()
});
