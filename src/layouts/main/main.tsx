import React, { FC } from "react";
import Helmet from "react-helmet";

import { MainLayoutProps } from "interfaces";

import styles from "./styles.module.scss";

const MainLayout: FC<MainLayoutProps> = ({
    title = "Typescript React App",
    children,
}) => {
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
