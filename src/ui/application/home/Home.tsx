import React, { FC } from "react";

import MainLayout from "layouts/main";

import styles from "./styles.module.scss";

const Home: FC = () => {
    return (
        <MainLayout>
            <div className={styles.mainDiv}>
            <p className={styles.homeDiv}>You are home!</p>
            </div>
        </MainLayout>
    );
};

export default Home;
