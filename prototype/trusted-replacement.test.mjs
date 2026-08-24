import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('./trusted-replacement.html', import.meta.url), 'utf8');

test('contains the complete urgent replacement story', () => {
  assert.match(html, /Replacement needed tonight/);
  assert.match(html, /Available sitters you can consider/);
  assert.match(html, /is confirmed/);
  assert.match(html, /You’re covered tonight/);
});

test('shows the requested trust signals with transparent language', () => {
  assert.match(html, /Verified childcare experience/);
  assert.match(html, /Safety credentials/);
  assert.match(html, /Community connections/);
  assert.match(html, /Reviews from real families/);
  assert.match(html, /HOUSEHOLD PREFERENCES/);
  assert.doesNotMatch(html, /HOUSEHOLD ALIGNMENT/);
  assert.doesNotMatch(html, /Trust score/);
});

test('uses one named profile object per sitter instead of positional profile data', () => {
  for (const profileId of ['sarah', 'maya', 'elena']) {
    assert.match(html, new RegExp(`openProfile\\('${profileId}'\\)`));
    assert.match(html, new RegExp(`${profileId}: \\{`));
  }

  for (const field of ['name', 'initials', 'years', 'bookings', 'repeatFamilies', 'rate', 'connection', 'review', 'reviewer', 'carePlan']) {
    assert.match(html, new RegExp(`selectedProfile\\.${field}`));
  }
});

test('marks every displayed profile and review as fictional sample data', () => {
  assert.match(html, /Prototype · Fictional profiles and sample data/);
});
