import React from "react";
import styles from "./styles/Content.module.css";

export default function Content() {
  return (
        <div className={styles.content}>   
            <img src="/fondo_naranja.svg" alt="salmon" />
            <div className={styles.frontTitle}>
                <h1>Orgullo <strong>Latinoamericano</strong></h1>
                <p>
                    Somos estudiantes <b>como tu</b>, queremos que
                    salgas adelante y tengas la oportunidad
                    de poder <b>elegir lo que te apasiona</b>.
                </p>
            </div>
            <div className={styles.contentPhrases}>
                <div className={styles.phrases}>
                    <div>
                        <h2>“Aprende <strong>cada día</strong> y estarás bien”</h2>
                        <p>
                            -Freddy Vega (CEO de Platzi)
                        </p>
                    </div>
                    <div>
                        <h2>“Yo nunca me sentí mas acabado y viejo que a los 20s(...)<strong>Tienen un chingo de tiempo”</strong></h2>
                        <p>
                            -Guillermo del Toro (ha de oler a jokeis)
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/mexicanandlomito.svg" alt="mexican and lomito" className={styles.mexicanAndLomito} />
                </div>
            </div>
        </div>
    );
}