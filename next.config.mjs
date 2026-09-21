export default {
 experimental:{optimizePackageImports:['@supabase/supabase-js']},
 async headers(){return [
  {source:'/manifest.webmanifest',headers:[{key:'Cache-Control',value:'public, max-age=0, must-revalidate'}]},
  {source:'/sw.js',headers:[{key:'Cache-Control',value:'public, max-age=0, must-revalidate'},{key:'Service-Worker-Allowed',value:'/'}]}
 ]}
};
