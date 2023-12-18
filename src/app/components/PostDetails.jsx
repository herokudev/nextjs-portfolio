import { createClient } from 'contentful';
import Image from 'next/image';
import { ctf } from '../utils/ctf';

async function getData(slug) {

  //console.log(ctf);

  const client = createClient({
    space: ctf.space,
    environment: 'master', // defaults to 'master' if not set
    accessToken: ctf.accessToken
  })
  const res = await client.getEntries({
    content_type: "websiteBlog",
    'fields.slug': slug
  })

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.items;
}


export default async function PostDetails({ slug }) {
  const data = await getData(slug);
  //console.log(data[0].fields.postContent);

  return (
    <div>
      <h1 className='text-[32px]'>{data[0].fields.title}</h1>
      <br />
      <Image
        src={'https:' + data[0].fields.blogPostImg.fields.file.url}
        alt={data[0].fields.blogPostImg.fields.description}
        width={550}
        height={550}
      />
      <br />
      {data[0].fields.postContent.content.map((contentItem, index) => (
        <p key={index}> {contentItem.content[0].value} </p>
      ))}

      <br />
      <br />
    </div>


  )
}
