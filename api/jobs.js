export const config = {
    runtime: 'edge'
  };
  
  export default async function handler(req) {
    const jobsJson = await fetch('https://raw.githubusercontent.com/AAYUSH412/Job-listing-website/main/src/jobtake.json');
    const jobs = await jobsJson.json();
  
    return new Response(JSON.stringify(jobs), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }