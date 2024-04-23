import { TextField } from "@mui/material";

function Input({ lable, value, handleChange }) {
    return (
        <div className="mx-[50px] my-[20px]">
            <TextField
                fullWidth
                id="outline-basic"
                size="small" label={lable}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;