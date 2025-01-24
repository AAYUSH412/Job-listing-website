import { readFileSync } from 'fs';
import { join } from 'path';
import jsonServer from 'json-server';

const handler = async (req, res) => {
  // Read the jobs data
  const jobs = JSON.parse(readFileSync(join(process.cwd(), 'src/jobtake.json'), 'utf8'));

  // Create JSON Server
  const server = jsonServer.create();
  const router = jsonServer.router(jobs);
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);
  server.handle(req, res);
};

export default handler;