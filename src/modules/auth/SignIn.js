import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Checkbox, Stack, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {AuthLayout} from "layout/AuthLayout";
import useAuth from "hook/useAuth";

export const SignIn = () => {
	const [checked, setChecked] = useState(true);
	const {signIn, loading, error, user} = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate("/");
	}, [user]);

	const submitForm = (e) => {
		e.preventDefault();
		signIn();
	}
	return (
		<AuthLayout title={"Sign In"}>
			<form onSubmit={submitForm}>
				<TextField required fullWidth label="Email"
									 autoComplete={"email"} autoFocus error={false}
									 helperText={" "} disabled={loading}/>
				<TextField required fullWidth label="Password"
									 type={"password"} autoComplete={"off"}
									 error={false} helperText={" "} disabled={loading}/>

				{/* Action Texts */}
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Stack direction={"row"} alignItems={"center"} columnGap={"7px"}>
						<Checkbox checked={checked} onChange={() => setChecked(!checked)}
											disabled={loading}/>
						<Typography variant={"caption"} color={"primary.contrastText"}>
							Remember me
						</Typography>
					</Stack>
					<Typography variant={"caption"} color={"primary.contrastText"}>
						Forgot Password?
					</Typography>
				</Stack>

				{/*	Submit Button */}
				<Button variant={"contained"} color={"secondary"} size={"large"}
								fullWidth sx={{marginTop: "50px"}} type={"submit"}
								disabled={loading}>
					<Typography component={"span"} fontSize={"16px"} variant={"button"}
											fontWeight={"bold"} textTransform={"capitalize"}>
						Sign In
					</Typography>
				</Button>

				{/*	Sign Up Link */}
				<Typography component={"div"} variant={"caption"} color={"primary.contrastText"}
										mt={1.5}>
					Don't have an account? &nbsp;
					<Typography component={Link} to={"/register"} variant={"caption"} color={"secondary.main"}
											fontWeight={"medium"}>
						Create an account
					</Typography>
				</Typography>

				{/*	Or Divider */}
				<Typography component={"div"} variant={"caption"} color={"primary.contrastText"}
										mt={5} textAlign={"center"}>
					Or
				</Typography>

				{/*	Google Sign In Button */}
				<Stack maxWidth={"max-content"} mt={3} direction={"row"} justifyContent={"start"} alignItems={"center"}
							 columnGap={"30px"} mx={"auto"}>
					<Button variant={"text"} color={"secondary"} size={"large"}
									startIcon={<Google color={"action"}/>} disabled={loading}>
						<Typography component={"span"} fontSize={"12px"} fontWeight={"bold"}
												sx={t => ({color: t.palette.grey["100"]})}>
							Sign Up with Google
						</Typography>
					</Button>
				</Stack>

			</form>
		</AuthLayout>
	)
}
