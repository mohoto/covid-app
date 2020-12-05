import React from 'react'
import { Card, CardHeader, CardContent, Typography, Avatar } from '@material-ui/core';
import './InfoBox.css'

export default function InfoBox({ title, cases, total, country, flag, pourcentage }) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">
                    {title}
                </Typography>
                <div className="infoBox__header">
                    <h2>{country ? country : 'Monde'}</h2>
                    <img src={country ? flag : "https://img.pngio.com/world-png-images-transparent-free-download-pngmartcom-world-png-free-2815_2815.png"} alt={`drapeau ${country}`} />
                </div>
                <h4>Denières 24h:</h4>
                <h2 className="infoBox__cases">{cases}</h2>
                <Typography color="textSecondary" className="infoBox__total">
                    TOTAL: {total}
                </Typography>
                {/* <h2 className="infoBox__pourcentage">{pourcentage}%</h2> */}
            </CardContent>
        </Card>
    )
}
