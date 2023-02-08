import Button from '@mui/material/Button';

function LoginButton({ title }) {
    return (
        <Button style={{ borderRadius: '40px', backgroundColor: "#196578" }} variant="contained">{title}</Button>
    )
}

export default LoginButton