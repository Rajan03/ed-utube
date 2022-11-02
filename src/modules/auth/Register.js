import {useEffect, useState} from "react";
import {AuthLayout} from "layout/AuthLayout";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "hook/useAuth";

export const Register = () => {
	const {signIn, loading, error, user} = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate("/");
	}, [user]);

	const submitForm = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
	}

	return (
		<AuthLayout title={"Create New Account"}>
			<form onSubmit={submitForm}>

				<TextField required fullWidth label="Username"
									 autoComplete={"off"} autoFocus error={false}
									 helperText={" "}/>
				<TextField required fullWidth label="Email"
									 autoComplete={"email"} error={false}
									 helperText={" "}/>
				<TextField required fullWidth label="Password"
									 type={"password"} autoComplete={"off"}
									 error={false} helperText={" "}/>

				{/*	Submit Button */}
				<Button variant={"contained"} color={"secondary"} size={"large"}
								fullWidth sx={{marginTop: "50px"}} type={"submit"}>
					<Typography component={"span"} fontSize={"16px"} variant={"button"}
											fontWeight={"bold"} textTransform={"capitalize"}>
						Sign Up
					</Typography>
				</Button>

				{/*	Sign In Link */}
				<Typography component={"div"} variant={"caption"} color={"primary.contrastText"}
										mt={1.5}>
					Already have an account? &nbsp;
					<Typography component={Link} to={"/signIn"} variant={"caption"} color={"secondary.main"}
											fontWeight={"medium"}>
						Sign In
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
									startIcon={<Google color={"action"}/>}>
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
