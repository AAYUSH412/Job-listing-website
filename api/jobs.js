import { join } from 'path';
import { readFileSync } from 'fs';
import { createServer } from 'json-server';

// Read the jobs data
const jobs = JSON.parse(readFileSync(join(process.cwd(), 'src/jobtake.json'), 'utf8'));

// Create JSON Server
const server = createServer({
  jobs: jobs.jobs
});

export default async function handler(req, res) {
  await server.handle(req, res);
}