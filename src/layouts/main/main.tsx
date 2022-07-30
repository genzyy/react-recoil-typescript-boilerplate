import React, { FC } from "react";
import Helmet from "react-helmet";

import { MainLayoutProps } from "interfaces";

import styles from "./styles.module.scss";

const MainLayout: FC<MainLayoutProps> = ({ title = "React Cpp", children }) => {
    return (
        <div className={styles.mainLayout}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;
