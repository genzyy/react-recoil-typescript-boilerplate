import React, { FC } from "react";

import MainLayout from "layouts/main/main";

import styles from "./styles.module.scss";

const Home: FC = () => {
    return (
        <MainLayout>
            <p className={styles.homeDiv}>You are home!</p>
        </MainLayout>
    );
};

export default Home;
