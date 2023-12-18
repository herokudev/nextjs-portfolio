import Navbar from '../components/Navbar';
import { createClient } from 'contentful';
import Post from '../components/Post';
import { ctf } from '../utils/ctf';

const CTF = {
  space: ctf.space,
  environment: 'master', // defaults to 'master' if not set
  accessToken: ctf.accessToken
};

async function getData() {

  const client = createClient(CTF);
  const res = await client.getEntries({ content_type: "websiteBlog" })
 
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.items;
}
 
export default async function Blog() {
  const data = await getData();
  const sortedData = data.sort((b, a) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime());
  //console.log(data[0].sys.id);
  //console.log(data[0].sys.createdAt);
  //console.log(data[0].fields.title);
  //console.log(data[0].fields.postContent.content[0].content[0].value);
  
  return (
    <main className='relative z-0 bg-primary'>
      <Navbar />
      <div className=' ml-[10%]'>        
        <br />
        <br />
        <br />
        <h3 className='font-bold text-blue-700 text-[50px]'>Blog app.</h3>
        <div className='mt-5 flex flex-wrap gap-8'>
          {sortedData.map(post => (
            <Post post={post} />
          ))}
        </div>        
      </div>
    </main>
  )
}
