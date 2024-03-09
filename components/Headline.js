import styles from '../styles/Home.module.css'

export default function Headline(props) {
console.log(props.page);

  return (
    <div>
        <h1 className={styles.title}>
        <a href="https://nextjs.org">{props.page} page</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{props.page}.js</code>
        </p>
    </div>
  
  )
}
