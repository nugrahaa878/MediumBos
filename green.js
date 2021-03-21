import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FeatureCardStyle from "./style";

export default function FeatureCard() {
    return (
        <FeatureCardStyle>
            <Grid>
                <Grid>
                    <Typography variant="button" className="title">
                        MPKT 5 SKS
                    </Typography>
                </Grid>
                <Grid item sm={8} md={3}>
                    <Typography className="about">
                        Layanan ini diperuntukan bagi mahasiswa yang mengambil
                        dan dosen pengampu MPKT 5 SKS terkait dengan pengumpulan
                        tugas
                    </Typography>
                </Grid>
            </Grid>
        </FeatureCardStyle>
    );
}
