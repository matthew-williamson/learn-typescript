import { Button, Stack } from "@mui/material"

export const UserControls = () => {
    return (
        <Stack direction='row' sx={{ p: 1, justifyContent: 'flex-end' }}>
            <Button variant='contained' sx={{ backgroundColor: theme => theme.palette.primary.main }}>
                Run
            </Button>
        </Stack>
    )
}