import {useState} from "react";
import {AuthLayout} from "layout/AuthLayout";
import {Button, Checkbox, Stack, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const SignIn = () => {
	const [checked, setChecked] = useState(true);

	const submitForm = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
	}
	return (
		<AuthLayout title={"Sign In"}>
			<form onSubmit={submitForm}>
				<TextField required fullWidth label="Email"
									 autoComplete={"email"} autoFocus error={false}
									 helperText={" "}/>
				<TextField required fullWidth label="Password"
									 type={"password"} autoComplete={"off"}
									 error={false} helperText={" "}/>

				{/* Action Texts */}
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Stack direction={"row"} alignItems={"center"} columnGap={"7px"}>
						<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>
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
								fullWidth sx={{marginTop: "50px"}} type={"submit"}>
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
