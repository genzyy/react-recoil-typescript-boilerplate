import React, { FC } from "react";

import { MainLayoutProps } from "interfaces";

import styles from "./styles.module.scss";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return <div className={styles.mainLayout}>{children}</div>;
};

export default MainLayout;
