import { Link } from 'react-router-dom'
import Navbar from '../components/UI/Navbar'
import classes from './PageHome.module.css'

function PageHome() {
  return (
    <section className={classes.container}>
      <Navbar />
      <section className={classes['title-section']}>
        <h1 className={classes.title}>
          <span>APLICACIÓN</span>
          <span>PARA PRACTICAR CRUD</span>
          <span>Con React, Node js, Express Y Mongo DB</span>
        </h1>
        {/* FULL STACK: agregar  estilo texto degradado. */}
        <span className={classes['full-stack']}>
          <span className={classes['full-stack-title']}>FULL STACK</span>{' '}
          <span className={classes['full-stack-background']}></span>{' '}
          <span className={classes['full-stack-stick']}></span>
        </span>
        <div className={classes.images}>
          <img src='imgs/logo-react.png' alt='React logo' height={30} />
          <img src='imgs/logo-nodejs.png' alt='Node js logo' height={40} />
          <img src='imgs/logo-expressjs.png' alt='Express logo' height={25} />
          <img src='imgs/logo-mongodb.webp' alt='Mongo DB logo' height={27} />
        </div>
      </section>
      <section className={classes['article-section']}>
        <Link to='/users' className={classes.link}>
          <span>Probar App</span>
          <span className={classes.points}>..</span>
          <svg>
            <rect x='0' y='0' fill='none'></rect>
          </svg>
        </Link>
        <article>
          <h2>Bienvenid@ 👋</h2>
          <p className={classes.p}>
            Esta es una aplicación de práctica. <br />
            Consiste en las cuatro funciones básicas para la gestión de bases de
            datos.
            <br />
            <br />
            Esta sección es únicamente de bienvenida. Puedes probar la
            aplicación en el enlace de arriba.
          </p>
        </article>
      </section>
    </section>
  )
}

export default PageHome
