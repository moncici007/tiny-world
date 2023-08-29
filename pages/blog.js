import {getSortedPostsData} from '../lib/posts'
import utilStyles from '../styles/utils.module.css';

export default function Blog({ allPostsData }) {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                        </small>
                    </li>
                    ))
                }
                </ul>
            </section>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
      allPostsData,
      },
    };
  }