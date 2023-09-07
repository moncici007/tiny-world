import Link from 'next/link';
import {getSortedPostsByYear} from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function Blog({ allPostsData }) {

    return (
        <>
            <Layout home='Blog'>
                <div>
                        <ul className={utilStyles.list}>
                        {
                            Object.keys(allPostsData).map((key) => (
                                <>
                                    <h2 className={utilStyles.headingLg}>{key}</h2>
                                    {
                                        allPostsData[key].map( ({ id, date, title }) => (
                                            <>
                                                <li className={utilStyles.listItem} key={id}>
                                                    <Link href={`/posts/${id}`}>{title}</Link>
                                                    <br />
                                                    <small className={utilStyles.lightText}>
                                                    <Date dateString={date} />
                                                    </small>
                                                </li>
                                            </>
                                        ))
                                    }
                                </>
                            ))
                        }
                        </ul>
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsByYear();
    return {
      props: {
      allPostsData,
      },
    };
  }