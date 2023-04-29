// Permet de modifier le titre de chaque page aisni que les meta tags

import React from "react";
import { Helmet } from "react-helmet-async";

export const Head = ({...props }) => {
    return (
        <Helmet>
            <title>{props.title} - Kasa</title>
            <meta name='description' content={props.description} />
        </Helmet>
    )
}