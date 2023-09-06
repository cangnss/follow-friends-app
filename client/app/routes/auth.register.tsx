import { Container, Button, Grid, TextField, Typography } from "@mui/material";
import { ActionArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action =  async ({ request }: ActionArgs) => {
    
    const formData = await request.formData()
    const username = formData.get("username")
    const password = formData.get("password")

    console.log(username, password);

    return json({})

}


export default function Register(){
    return(
        <Container sx={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            <Typography variant="h3" sx={{ marginBottom: "1rem" }}>Register</Typography>
            <Form method="post">
                <Grid container sx={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
                    <Grid item xs={12} sm={6} mb={10}>
                        <TextField
                            name="username"
                            required
                            id="outlined-required"
                            label="Username"
                            defaultValue="alicangunes"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="password"
                            type="password"
                            required
                            id="outlined-required"
                            label="Password"
                            defaultValue="1234"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button type="submit" variant="contained">Sign Up</Button>
                    </Grid>
                </Grid>
            </Form>
        </Container>
    )
}