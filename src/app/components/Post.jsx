import Link from 'next/link';
import Image from 'next/image';

const Post = ({post}) => {

    return (
        <div>
            <br />
            <div className=' flex-wrap w-[300px]'>
                {post.fields.title}
            </div>
            
            <br />
            <br />
            <div style={{ width: '300px', height: '300px' }}>
                <Link href={'/blog/' + post.fields.slug}>
                <Image 
                    src={'https:' + post.fields.blogPostImg.fields.file.url}
                    alt={post.fields.blogPostImg.fields.description}                
                    width={300} 
                    height={350}
                />                
                </Link>
            </div>
        </div>        
    )
}

export default Post;