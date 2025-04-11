import Head from "next/head";
import { apiPokemon, name } from "../constants/envVariables";
import styles from "../styles/TestPage.module.css";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${apiPokemon}pokemon/ditto`)
    const data = await res.json()

    console.log('data', data);

    // Pass data to the page via props
    return { props: { data } }
}

export default function TestPage({ data }) {

    console.log("pokemon", data);

    return (
        <div className={styles.testPageContainer}>
            <Head>
                <title>test page</title>
                <meta name="description" content={`Link of ${name}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>
                    <p>Hello every-nyan</p>
                </div>
                <div>
                    <p>{data.name}</p>
                </div>
                <div>
                    <p>{data.sprites.front_default}</p>
                    <img src={data.sprites.front_default} alt="Logo" />
                </div>
            </div>
        </div>
    );
}

